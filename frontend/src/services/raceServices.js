// racesServices.js
import axios from 'axios';

const API_URL = 'https://localhost:7093/Races';

const getAllRaces = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching races:", error);
        throw error;
    }
};

// Export the function
export { getAllRaces };
