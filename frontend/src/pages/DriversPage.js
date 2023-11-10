import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
import { getAllDrivers, updateDriver, deleteDriver } from '../services/driverServices';

const DriversPage = () => {
    const [drivers, setDrivers] = useState([]);
    const [editDriverId, setEditDriverId] = useState(null);
    const [editFormData, setEditFormData] = useState({ name: '', age: '', nationality: '', image: '' });

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

    const handleEditClick = (driver) => {
        setEditDriverId(driver.id);
        setEditFormData({ 
            name: driver.name, 
            age: driver.age, 
            nationality: driver.nationality,
            image: driver.image // Include the image URL
        });
    };

    const handleEditFormChange = (e) => {
        setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
    };

    const handleConfirmClick = async () => {
        const updatedDriver = { ...editFormData, id: editDriverId };
        await updateDriver(updatedDriver);
        setEditDriverId(null);
        fetchDrivers();
    };

    const handleDeleteClick = async (driverId) => {
        await deleteDriver(driverId);
        fetchDrivers();
    };

    return (
        <div>
            <Navbar bgColor="bg-white" linkColor="black" position="relative" />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Drivers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {drivers.map(driver => (
                        <div key={driver.id} className="bg-white rounded-lg shadow-lg p-4">
                            <img 
                                src={`${backendBaseUrl}${driver.image}`}
                                alt={driver.name} 
                                className="w-48 h-48 object-cover rounded-full mx-auto"
                            />
                            {editDriverId === driver.id ? (
                                <div>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={editFormData.name} 
                                        onChange={handleEditFormChange}
                                        className="mt-2 p-2 border rounded w-full"
                                    />
                                    <input 
                                        type="number" 
                                        name="age" 
                                        value={editFormData.age} 
                                        onChange={handleEditFormChange}
                                        className="mt-2 p-2 border rounded w-full"
                                    />
                                    <input 
                                        type="text" 
                                        name="nationality" 
                                        value={editFormData.nationality} 
                                        onChange={handleEditFormChange}
                                        className="mt-2 p-2 border rounded w-full"
                                    />
                                    <button onClick={handleConfirmClick} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Confirm</button>
                                </div>
                            ) : (
                                <div className='mt-8'>
                                    <h3 className="text-lg font-semibold">{driver.name}</h3>
                                    <p>Age: {driver.age}</p>
                                    <p>Nationality: {driver.nationality}</p>
                                    <div className="flex justify-between mt-3">
                                        <button onClick={() => handleEditClick(driver)} className="px-4 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">Edit</button>
                                        <button onClick={() => handleDeleteClick(driver.id)} className="px-4 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DriversPage;
