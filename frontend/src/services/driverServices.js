// driverService.js
import axios from 'axios';

const API_URL = 'https://localhost:7093/drivers';

const getAllDrivers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching drivers:", error);
        throw error;
    }
};

// Export other functions similarly
export { getAllDrivers };
