import axios from 'axios';

const API_URL = 'https://localhost:7093';

const getQuestions = async () => {
    try {
        const response = await axios.get(`${API_URL}/Questions`);
        return response.data;
    } catch (error) {
        console.error("Error fetching questions:", error);
        throw error;
    }
};

const submitQuizResult = async (username, score) => {
    try {
        const response = await axios.post(`${API_URL}/Participants`, {
            username,
            score
        });
        return response.data;
    } catch (error) {
        console.error("Error submitting quiz result:", error);
        throw error;
    }
};

const getParticipants = async () => {
    try {
        const response = await axios.get(`${API_URL}/Participants`);
        return response.data;
    } catch (error) {
        console.error("Error fetching participants:", error);
        throw error;
    }
};


export { getQuestions, submitQuizResult, getParticipants };
