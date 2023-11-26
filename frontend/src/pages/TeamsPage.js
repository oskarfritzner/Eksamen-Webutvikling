import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
import TeamSearch from "../components/Team/TeamSearch";
import TeamList from "../components/Team/TeamList";
import { getAllTeams } from '../services/teamsServices';

// TeamsPage component to display and search through teams.
const TeamsPage = () => {
    const [teams, setTeams] = useState([]); // State to store all teams.
    const [filteredTeams, setFilteredTeams] = useState([]); // State to store teams after applying search filter.
    const [searchTerm, setSearchTerm] = useState(''); // State to store search term.

    // Fetch all teams on component mount.
    useEffect(() => {
        fetchTeams();
    }, []);

    // Function to fetch teams data.
    const fetchTeams = async () => {
        try {
            const data = await getAllTeams();
            setTeams(data); // Store all teams data.
            setFilteredTeams(data); // Initially display all teams.
        } catch (error) {
            console.error("Failed to fetch teams:", error);
        }
    };


    // Function to handle search input changes.
    const handleSearchChange = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue); // Update search term state.

        // Filter teams based on search term.
        const filtered = teams.filter(team =>
            team.manufacturer.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        setFilteredTeams(filtered); // Update filtered teams state.
    };

    return (
        <div>
            <Navbar bgColor="bg-white" linkColor="black" position="relative" />
            <div className="px-4 py-4 md:p-8 max-w-7xl mx-auto">
                <TeamSearch searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                <TeamList teams={filteredTeams} />
            </div>
        </div>
    );
};

export default TeamsPage;
