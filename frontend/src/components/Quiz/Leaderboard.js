import React from 'react';

const Leaderboard = ({ leaderboard }) => {
    return (
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
    );
};

export default Leaderboard;
