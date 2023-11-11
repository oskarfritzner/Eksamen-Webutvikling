import React, { useState, useEffect } from 'react';
import { getQuestions, submitQuizResult } from '../services/quizServices';
import Navbar from '../components/Navigation-Bar';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [username, setUsername] = useState('');
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            const fetchedQuestions = await getQuestions();
            setQuestions(fetchedQuestions);
        };
        fetchQuestions();
    }, []);

    const startQuiz = () => {
        if (username) {
            setShowQuiz(true);
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
            calculateScore(newAnswers);
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

    return (
        <div>
            <Navbar />
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4 text-center">F1 Quiz Time!</h2>
                    {!showQuiz && !quizCompleted && (
                        <div className="flex flex-col items-center">
                            <input 
                                type="text" 
                                placeholder="Enter your game name" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                className="border border-gray-300 rounded p-2 mb-4 bg-white text-black"
                            />
                            <button onClick={startQuiz} className="bg-f1-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Play
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
                                        {answer}
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
            </div>
        </div>

        </div>
    );
};

export default QuizPage;
