import React from 'react';

const QuizResult = ({ username, score }) => {
    return (
        <div className="text-center mt-8">
            <p className="text-lg font-semibold">
                Thank you for participating, {username}! You got {score}/10 points.
            </p>
        </div>
    );
};

export default QuizResult;
