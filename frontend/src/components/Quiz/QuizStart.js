import React from 'react';

const QuizStart = ({ username, setUsername, startQuiz }) => {
    return (
        <div className="flex flex-col items-center mt-48">
            <input 
                type="text" 
                placeholder="Enter your game name" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="border border-gray-300 rounded p-2 mb-4 text-black"
            />
            <button onClick={startQuiz} className="bg-f1-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Play
            </button>
        </div>
    );
};

export default QuizStart;
