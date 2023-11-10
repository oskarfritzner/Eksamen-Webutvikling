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

// Function to update a driver
const updateDriver = async (driverId, driverData) => {
    try {
        const response = await axios.put(`${API_URL}/${driverId}`, driverData);
        return response.data;
    } catch (error) {
        console.error("Error updating driver:", error);
        throw error;
    }
};

// Function to delete a driver
const deleteDriver = async (driverId) => {
    try {
        const response = await axios.delete(`${API_URL}/${driverId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting driver:", error);
        throw error;
    }
};

// Export the functions
export { getAllDrivers, updateDriver, deleteDriver };
