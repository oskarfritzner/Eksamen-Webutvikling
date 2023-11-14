import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
import QuizStart from "../components/Quiz/QuizStart"; // Adjust the path as necessary
import QuizQuestion from "../components/Quiz/QuizQuestion"; // Adjust the path as necessary
import QuizResult from "../components/Quiz/QuizResult"; // Adjust the path as necessary
import Leaderboard from "../components/Quiz/Leaderboard"; // Adjust the path as necessary
import { getQuestions, submitQuizResult, getParticipants } from '../services/quizServices';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [username, setUsername] = useState(localStorage.getItem('quizUsername') || '');
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetchQuestions();
        fetchParticipants();
    }, []);

    const fetchQuestions = async () => {
        try {
            const fetchedQuestions = await getQuestions();
            setQuestions(fetchedQuestions);
        } catch (error) {
            console.error("Failed to fetch questions:", error);
        }
    };

    const fetchParticipants = async () => {
        try {
            const participants = await getParticipants();
            const sortedParticipants = participants
                .sort((a, b) => b.score - a.score)
                .slice(0, 10); 
            setLeaderboard(sortedParticipants);
        } catch (error) {
            console.error("Failed to fetch participants:", error);
        }
    };

    const startQuiz = () => {
        if (username) {
            localStorage.setItem('quizUsername', username);
            setShowQuiz(true);
            setQuizCompleted(false);
            setCurrentQuestionIndex(0);
            setUserAnswers({});
        } else {
            alert("Please enter your game name to start.");
        }
    };

    const handleAnswerSelect = async (answer) => {
        const question = questions[currentQuestionIndex];
        const isCorrect = answer === question.correctAnswer;

        const newAnswers = {
            ...userAnswers,
            [question.id]: {
                selectedAnswer: answer,
                isCorrect,
            },
        };
        setUserAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
            setShowQuiz(false);
            await calculateScore(newAnswers);
            await fetchParticipants();
        }
    };

    const calculateScore = async (answers) => {
        const totalScore = Object.values(answers).reduce(
            (score, answer) => score + (answer.isCorrect ? 1 : 0),
            0
        );
        setScore(totalScore);
        await submitQuizResult(username, totalScore);
    };

    // Reset quizCompleted when username changes
    useEffect(() => {
        setQuizCompleted(false);
    }, [username]);

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <div className="container mx-auto p-4 flex flex-col items-center min-h-screen">
                {!showQuiz && <QuizStart username={username} setUsername={setUsername} startQuiz={startQuiz} />}
                {showQuiz && (
                    <QuizQuestion 
                        currentQuestion={questions[currentQuestionIndex]} 
                        currentQuestionIndex={currentQuestionIndex} 
                        handleAnswerSelect={handleAnswerSelect}
                    />
                )}
                {quizCompleted && <QuizResult username={username} score={score} />}
                <Leaderboard leaderboard={leaderboard} />
            </div>
        </div>
    );
};

export default QuizPage;
