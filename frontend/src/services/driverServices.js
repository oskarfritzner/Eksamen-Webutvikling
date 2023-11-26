import axios from 'axios';

const API_URL = 'https://localhost:7093/Drivers';

const getAllDrivers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching drivers:", error);
        throw error;
    }
};

// Function to update a driver excluding the image
const updateDriver = async (driver) => {
    const driverData = {
        name: driver.name,
        age: parseInt(driver.age, 10), // Ensure age is an integer
        nationality: driver.nationality,
        image: driver.image // Include the existing image URL
    };

    console.log("Updating driver with data:", driverData);

    try {
        const response = await axios.put(`${API_URL}/${driver.id}`, driverData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
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
