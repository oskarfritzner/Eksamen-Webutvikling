import React, { useState, useEffect } from "react";
import Navbar from "../components/Navigation-Bar";
import RaceList from "../components/Race/RaceList";  // Adjust the path as necessary
import RaceDetails from "../components/Race/RaceDetails";  // Adjust the path as necessary
import { getAllRaces } from "../services/raceServices";
import { getAllDrivers } from "../services/driverServices";

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

  return (
    <div>
      <Navbar bgColor="bg-white" linkColor="black" position="relative" />
      <div className="px-4 py-4 md:p-8 flex flex-col md:flex-row mt-4 md:mx-8">
        <RaceList races={races} onRaceSelect={handleRaceSelect} />
        <RaceDetails selectedRace={selectedRace} drivers={drivers} />
      </div>
    </div>
  );
};

export default RacesPage;