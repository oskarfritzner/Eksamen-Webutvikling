import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
import { getAllTeams } from '../services/teamsServices'; // Adjust the import path as needed

const TeamsPage = () => {
    const [teams, setTeams] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const backendBaseUrl = 'https://localhost:7093';

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const data = await getAllTeams();
            setTeams(data);
            setFilteredTeams(data); // Initialize filtered teams with all teams
        } catch (error) {
            console.error("Failed to fetch teams:", error);
        }
    };

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);

        const filtered = teams.filter(team =>
            team.manufacturer.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        setFilteredTeams(filtered);
    };

    return (
        <div>
            <Navbar bgColor="bg-white" linkColor="black" position="relative" />
            <div className="p-4">
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Search teams by manufacturer..." 
                        value={searchTerm} 
                        onChange={handleSearch} 
                        className="p-2 border rounded w-full"
                    />
                    {searchTerm && (
                        <p className="text-sm text-gray-600 mt-2">
                            {filteredTeams.length > 0 
                                ? `We found ${filteredTeams.length} teams registered` 
                                : "We couldn't find any teams responding to your search."}
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredTeams.map(team => (
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
            </div>
        </div>
    );
}

export default TeamsPage;
