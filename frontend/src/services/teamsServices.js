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


export { getAllTeams };
