import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
import { getAllDrivers } from '../services/driverServices'; // Adjust the path as needed

const DriversPage = () => {
    const [drivers, setDrivers] = useState([]);
    const backendBaseUrl = 'https://localhost:7093'; // Replace with your backend base URL

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const data = await getAllDrivers();
                setDrivers(data);
            } catch (error) {
                console.error("Failed to fetch drivers:", error);
                // Optionally, handle the error in the UI
            }
        };

        fetchDrivers();
    }, []); // Empty dependency array to run only on mount

    return (
        <div>
            <Navbar
              bgColor="bg-white"
              linkColor="black"
              position="relative"
            />
            <div className="drivers-list">
                <h2>Drivers</h2>
                <ul>
                {drivers.map(driver => (
                        <li key={driver.id}>
                            <img 
                                src={`${backendBaseUrl}${driver.image}`} // Use 'driver.image' instead of 'driver.Image'
                                alt={driver.name} 
                                style={{ width: '100px', height: 'auto' }}
                            />
                            <div>
                                <strong>Name:</strong> {driver.name} <br />
                                <strong>Age:</strong> {driver.age} <br />
                                <strong>Nationality:</strong> {driver.nationality}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DriversPage;
