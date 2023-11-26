import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
import DisplayDrivers from "../components/Driver/DisplayDrivers";
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
            image: driver.image
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
            <div className="px-4 py-4 md:p-8 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Drivers</h2>
                <DisplayDrivers 
                    drivers={drivers} 
                    handleEditClick={handleEditClick} 
                    handleDeleteClick={handleDeleteClick}
                    editDriverId={editDriverId}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleConfirmClick={handleConfirmClick}
                    backendBaseUrl={backendBaseUrl}
                />
            </div>
        </div>
    );
};

export default DriversPage;
