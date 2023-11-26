import React, { useState, useEffect } from "react";
import Navbar from "../components/Navigation/Navigation-Bar";
import Footer from "../components/Navigation/Footer";
import QuizStart from "../components/Quiz/QuizStart";
import QuizQuestion from "../components/Quiz/QuizQuestion";
import QuizResult from "../components/Quiz/QuizResult";
import Leaderboard from "../components/Quiz/Leaderboard";
import {
  getQuestions,
  submitQuizResult,
  getParticipants,
} from "../services/quizServices";

// The QuizPage component handles the quiz functionality including starting the quiz,
// displaying questions, submitting answers, and showing results.

const QuizPage = () => {
  // State for quiz data, user responses, and UI control.
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [username, setUsername] = useState(
    localStorage.getItem("quizUsername") || ""
  );
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);

  // Fetch quiz questions and leaderboard data when component mounts.
  useEffect(() => {
    fetchQuestions();
    fetchParticipants();
  }, []);

  // Fetches questions from the quiz API.
  const fetchQuestions = async () => {
    try {
      const fetchedQuestions = await getQuestions();
      setQuestions(fetchedQuestions);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  // Fetches the leaderboard data from the API.
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

  // Starts the quiz and initializes necessary states.
  const startQuiz = () => {
    if (username) {
      localStorage.setItem("quizUsername", username);
      setShowQuiz(true);
      setQuizCompleted(false);
      setCurrentQuestionIndex(0);
      setUserAnswers({});
    } else {
      alert("Please enter your game name to start.");
    }
  };

  // Handles the logic when a user selects an answer.
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

  // Calculates the user's score based on their answers and submits the result.
  const calculateScore = async (answers) => {
    const totalScore = Object.values(answers).reduce(
      (score, answer) => score + (answer.isCorrect ? 1 : 0),
      0
    );
    setScore(totalScore);
    await submitQuizResult(username, totalScore);
  };

  // Update state when username changes
  useEffect(() => {
    setQuizCompleted(false);
  }, [username]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="container mx-auto p-4 flex flex-col items-center min-h-screen">
        {!showQuiz && (
          <QuizStart
            username={username}
            setUsername={setUsername}
            startQuiz={startQuiz}
          />
        )}
        {showQuiz && (
          <QuizQuestion
            currentQuestion={questions[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            handleAnswerSelect={handleAnswerSelect}
          />
        )}
        {quizCompleted && <QuizResult username={username} score={score} />}
        <Leaderboard leaderboard={leaderboard} />
      </section>
    </div>
  );
};

export default QuizPage;
