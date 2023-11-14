import React from 'react';

const QuizQuestion = ({ currentQuestion, currentQuestionIndex, handleAnswerSelect }) => {
    return (
        <div className="text-center">
            <p className="mb-2">Question {currentQuestionIndex + 1} of {currentQuestion.length}</p>
            <p className="font-semibold mb-4">{currentQuestion.query}</p>
            <div className="flex flex-col items-center">
                {currentQuestion.answers.map((answer, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleAnswerSelect(answer)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 my-1 rounded w-full"
                    >
                        {['A', 'B', 'C', 'D'][index]}. {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
