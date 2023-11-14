import React from 'react';

const TeamList = ({ teams }) => {
    const backendBaseUrl = 'https://localhost:7093'; // Consider moving this to a config file or environment variable

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map(team => (
                <div key={team.id} className="bg-white rounded-lg shadow p-4">
                    <img 
                        src={`${backendBaseUrl}${team.image}`}
                        alt={team.manufacturer} 
                        className="w-full h-48 object-cover rounded"
                    />
                    <div className="mt-2">
                        <h3 className="text-lg font-semibold">{team.manufacturer}</h3>
                        <p>Team Number: {team.id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamList;
