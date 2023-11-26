import axios from "axios";

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      "https://localhost:7093/UploadImage",
      formData
    );
    return response.data.url;
  } catch (error) {
    console.error(error);
  }
};

export { uploadImage };
