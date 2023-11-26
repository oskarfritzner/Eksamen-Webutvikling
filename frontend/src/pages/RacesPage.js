import React, { useState, useEffect } from "react";
import Navbar from "../components/Navigation/Navigation-Bar";
import RaceList from "../components/Race/RaceList";
import RaceDetails from "../components/Race/RaceDetails";
import { getAllRaces } from "../services/raceServices";
import { getAllDrivers } from "../services/driverServices";

// The RacesPage component displays a list of races and their details.
const RacesPage = () => {
  // State to store races, drivers, and the selected race.
  const [races, setRaces] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [selectedRace, setSelectedRace] = useState(null);

  // Fetch races and drivers data when the component mounts.
  useEffect(() => {
    fetchRaces();
    fetchDrivers();
  }, []);

  // Fetches race data from the API and updates state.
  const fetchRaces = async () => {
    try {
      const data = await getAllRaces();
      setRaces(data);
    } catch (error) {
      console.error("Failed to fetch races:", error);
    }
  };

  // Fetches driver data from the API and updates state.
  const fetchDrivers = async () => {
    try {
      const data = await getAllDrivers();
      setDrivers(data);
    } catch (error) {
      console.error("Failed to fetch drivers:", error);
    }
  };

  // Handles the selection of a race, updating the selectedRace state.
  const handleRaceSelect = (race) => {
    setSelectedRace(race);
  };

  return (
    <div>
      <Navbar bgColor="bg-white" linkColor="black" position="relative" />
      <section className="px-4 py-4 md:p-8 flex flex-col md:flex-row mt-4 md:mx-8 max-w-7xl lg:mx-auto xs:flex-row">
        <RaceList races={races} onRaceSelect={handleRaceSelect} />
        <RaceDetails selectedRace={selectedRace} drivers={drivers} />
      </section>
    </div>
  );
};

export default RacesPage;
