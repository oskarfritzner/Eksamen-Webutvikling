import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navigation-Bar";
import { getAllRaces } from '../services/raceServices';
import { getAllDrivers } from '../services/driverServices';

const RacesPage = () => {
    const [races, setRaces] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [selectedRace, setSelectedRace] = useState(null);

    useEffect(() => {
        fetchRaces();
        fetchDrivers();
    }, []);

    const fetchRaces = async () => {
        try {
            const data = await getAllRaces();
            setRaces(data);
        } catch (error) {
            console.error("Failed to fetch races:", error);
        }
    };

    const fetchDrivers = async () => {
        try {
            const data = await getAllDrivers();
            setDrivers(data);
        } catch (error) {
            console.error("Failed to fetch drivers:", error);
        }
    };

    const handleRaceSelect = (race) => {
        setSelectedRace(race);
    };

    const getWinnerDetails = () => {
        if (selectedRace) {
            const winner = drivers.find(driver => driver.name === selectedRace.winner);
            return winner ? (
                <div className="flex items-center">
                    <img 
                        src={`https://localhost:7093${winner.image}`} 
                        alt={winner.name} 
                        className="w-20 h-20 object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <p><strong>Name:</strong> {winner.name}</p>
                        <p><strong>Nationality:</strong> {winner.nationality}</p>
                    </div>
                </div>
            ) : <p>No matching driver found.</p>;
        }
        return null;
    };

    return (
        <div>
            <Navbar bgColor="bg-white" linkColor="black" position="relative" />
            <div className="px-4 py-4 md:p-8 flex flex-col md:flex-row mt-4 md:mx-8"> 
                <div className="md:w-3/4 md:pr-8">
                    <h2 className="text-2xl font-bold mb-4">Races</h2>
                    <div className="border-b border-gray-200">
                        {races.map(race => (
                            <div 
                                key={race.id} 
                                className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex justify-between"
                                onClick={() => handleRaceSelect(race)}
                            >
                                <p>Grand Prix: {race.grandPrix}</p>
                                <p>Winner: {race.winner}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4 md:mt-0 md:w-1/4 ml-4 p-4 bg-white rounded-lg shadow md:ml-8">
    <h3 className="text-lg font-semibold mb-2">Race Details</h3>
    {selectedRace ? (
        <>
            <p><strong>Grand Prix:</strong> {selectedRace.grandPrix}</p>
            <p><strong>Winner:</strong> {selectedRace.winner}</p>
            <p><strong>Laps:</strong> {selectedRace.numberOfLaps}</p>
            <p><strong>Winner Time:</strong> {selectedRace.winnerTime}</p>
            <div className="mt-4">
                <h4 className="text-md font-semibold mb-2">Winner Details</h4>
                {getWinnerDetails()}
            </div>
        </>
    ) : <p>Select a race to view details.</p>}
</div>
            </div>
        </div>
    );
}

export default RacesPage;
