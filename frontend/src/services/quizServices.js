import axios from "axios";

const API_URL = "https://localhost:7093";

// Function to get all quiz questions
const getQuestions = async () => {
  try {
    // Making a GET request to fetch all quiz questions
    const response = await axios.get(`${API_URL}/Questions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

// Function to submit quiz results
const submitQuizResult = async (username, score) => {
  try {
    // Making a POST request to submit quiz results
    const response = await axios.post(`${API_URL}/Participants`, {
      username,
      score,
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error submitting quiz result:", error);
    throw error;
  }
};

// Function to get all participants
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
