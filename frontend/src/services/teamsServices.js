import axios from 'axios';

const API_URL = 'https://localhost:7093/Teams';

// Function to fetch all teams
const getAllTeams = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching teams:", error);
        throw error;
    }
};

// Function to fetch a single team by ID
const getTeamById = async (teamId) => {
    try {
        const response = await axios.get(`${API_URL}/${teamId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching team:", error);
        throw error;
    }
};

// Function to create a new team
const createTeam = async (teamData) => {
    try {
        const response = await axios.post(API_URL, teamData);
        return response.data;
    } catch (error) {
        console.error("Error creating team:", error);
        throw error;
    }
};

// Function to update a team
const updateTeam = async (teamId, teamData) => {
    try {
        const response = await axios.put(`${API_URL}/${teamId}`, teamData);
        return response.data;
    } catch (error) {
        console.error("Error updating team:", error);
        throw error;
    }
};

// Function to delete a team
const deleteTeam = async (teamId) => {
    try {
        const response = await axios.delete(`${API_URL}/${teamId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting team:", error);
        throw error;
    }
};

export { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam };
