import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navigation-Bar';
import { uploadImage } from '../services/imageServices';

const RegisterDriver = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    nationality: '',
    driverImage: null,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Upload driver image and get the URL
    const driverImageUrl = await uploadImage(formData.driverImage);
    if (!driverImageUrl) {
      console.error('Failed to upload driver image');
      return;
    }
  
    // Parse age to integer and correct the driverImage property to match the backend model
    const driverData = {
      name: formData.name,
      age: parseInt(formData.age, 10), // Parse age to a number
      nationality: formData.nationality,
      Image: driverImageUrl, // Correct the property name to match the backend model
    };
  
    try {
      // Post the driver data to your driver creation endpoint
      const response = await axios.post('https://localhost:7093/Drivers', driverData);
  
      console.log(response.data); // Success
    } catch (error) {
      console.error(error); // Handle the error
    }
  };
  

  return (
    <>
      <Navbar bgColor="bg-white" linkColor="black" position='relative' />

      <div className='flex items-center justify-center h-screen'>
        <div className='w-full max-w-xl p-8'>
          <h2 className="text-center text-3xl font-semibold mb-4">Register Driver</h2>
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driverImage">
                Driver Image
              </label>
              <input type="file" name="driverImage" onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="flex items-center justify-center">
              <button type="submit" className="bg-f1-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{ transition: 'background-color 0.3s' }}>
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
