import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
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
                    {/* Quiz Game Section */}
                    <div className="w-full max-w-lg mt-44 mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-center">F1 Quiz Time!</h2>
                        {!showQuiz && (
                            <div className="flex flex-col items-center">
                                <input 
                                    type="text" 
                                    placeholder="Enter your game name" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                    className="border border-gray-300 rounded p-2 mb-4 text-black"
                                />
                                <button onClick={startQuiz} className="bg-f1-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    {quizCompleted ? "Play Again" : "Play"}
                                </button>
                            </div>
                        )}
                        {showQuiz && (
                            <div className="text-center">
                                <p className="mb-2">Question {currentQuestionIndex + 1} of {questions.length}</p>
                                <p className="font-semibold mb-4">{questions[currentQuestionIndex].query}</p>
                                <div className="flex flex-col items-center">
                                    {questions[currentQuestionIndex].answers.map((answer, index) => (
                                        <button 
                                            key={answer} 
                                            onClick={() => handleAnswerSelect(answer)}
                                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 my-1 rounded w-full"
                                        >
                                            {['A', 'B', 'C', 'D'][index]}. {answer}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {quizCompleted && (
                            <div className="text-center">
                                <p className="text-lg font-semibold">
                                    Thank you for participating, {username}! You got {score}/10 points.
                                </p>
                            </div>
                        )}
                    </div>
        
                    {/* Leaderboard Section */}
                    <div className="w-full max-w-xl mb-10">
                        <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
                        <div className="bg-gray-800 p-4 rounded">
                            {leaderboard.map((participant, index) => (
                                <div key={index} className="flex justify-between border-b border-gray-700 py-2">
                                    <span>{participant.username}</span>
                                    <span style={{ color: participant.username === localStorage.getItem('quizUsername') ? '#f10606' : 'white' }}>
                                        {participant.score}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
        
    
};

export default QuizPage;
