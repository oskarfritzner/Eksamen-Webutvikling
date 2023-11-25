import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
import TeamSearch from "../components/Team/TeamSearch"; // Adjust the path as necessary
import TeamList from "../components/Team/TeamList"; // Adjust the path as necessary
import { getAllTeams } from '../services/teamsServices';

const TeamsPage = () => {
    const [teams, setTeams] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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


    const handleSearchChange = (event) => {
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
            <div className="px-4 py-4 md:p-8">
                <TeamSearch searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                <TeamList teams={filteredTeams} />
            </div>
        </div>
    );
};

export default TeamsPage;
