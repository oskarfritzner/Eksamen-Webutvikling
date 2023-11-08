import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';

const RegisterDriver = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    nationality: '',
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = 'https://yourapi.com/drivers';
    const formDataToSend = new FormData();

    // Append data to formDataToSend
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(url, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle success (e.g., display a message or redirect)
      console.log(response.data); // You might want to show a success message or redirect the user
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error(error); // You might want to show an error message to the user
    }
  };

  return (
    <>
      <Navbar bgColor="bg-white" linkColor="black" />
      <div className='flex items-center justify-center h-screen'>
        <div className='w-full max-w-xl p-8'>
          <h2 className="text-center text-3xl font-semibold mb-4">Register as a Driver</h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                Age
              </label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nationality">
                Nationality
              </label>
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nationality">
                Team
              </label>
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
              </label>
              <input type="file" name="image" onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="bg-f1-red hover:bg-red-700 text-white font-bold mt-4 py-2 w-full rounded focus:outline-none focus:shadow-outline" style={{ transition: 'background-color 0.3s' }}>
                Register Driver
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterDriver;
