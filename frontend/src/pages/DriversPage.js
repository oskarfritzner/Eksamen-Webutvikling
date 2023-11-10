import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
import { getAllDrivers, updateDriver, deleteDriver } from '../services/driverServices'; // Import the necessary functions

const DriversPage = () => {
    const [drivers, setDrivers] = useState([]);
    const backendBaseUrl = 'https://localhost:7093';

    useEffect(() => {
        fetchDrivers();
    }, []);

    const fetchDrivers = async () => {
        try {
            const data = await getAllDrivers();
            setDrivers(data);
        } catch (error) {
            console.error("Failed to fetch drivers:", error);
        }
    };

    const handleEdit = async (driverId, newDetails) => {
        try {
            await updateDriver(driverId, newDetails);
            fetchDrivers(); // Refresh the list after update
        } catch (error) {
            console.error("Failed to update driver:", error);
        }
    };

    const handleDelete = async (driverId) => {
        try {
            await deleteDriver(driverId);
            fetchDrivers(); // Refresh the list after deletion
        } catch (error) {
            console.error("Failed to delete driver:", error);
        }
    };

    return (
        <div>
            <Navbar bgColor="bg-white" linkColor="black" position="relative" />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Drivers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {drivers.map(driver => (
                        <div key={driver.id} className="bg-white rounded overflow-hidden shadow-lg">
                            <img 
                                src={`${backendBaseUrl}${driver.image}`} 
                                alt={driver.name} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{driver.name}</h3>
                                <p className="text-sm"><strong>Age:</strong> {driver.age}</p>
                                <p className="text-sm"><strong>Nationality:</strong> {driver.nationality}</p>
                                <button 
                                    onClick={() => handleEdit(driver.id, { /* New details here */ })}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDelete(driver.id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DriversPage;