import React, { useState, useEffect } from "react";
import Navbar from "../components/Navigation/Navigation-Bar";
import Footer from "../components/Navigation/Footer";
import TeamSearch from "../components/Team/TeamSearch";
import TeamList from "../components/Team/TeamList";
import TeamDriverModal from "../components/Team/TeamDriverModal/TeamDriverModal";
import { getAllTeams } from "../services/teamsServices";
import { getAllDrivers } from "../services/driverServices";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [drivers, setDrivers] = useState([]); // State for drivers
  const [selectedDriver, setSelectedDriver] = useState(null); // State for the selected driver

  useEffect(() => {
    fetchTeams();
    fetchDrivers();
  }, []);

  const fetchTeams = async () => {
    try {
      const data = await getAllTeams();
      setTeams(data);
      setFilteredTeams(data);
    } catch (error) {
      console.error("Failed to fetch teams:", error);
    }
  };

  const fetchDrivers = async () => {
    try {
      const data = await getAllDrivers();
      setDrivers(data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    const filtered = teams.filter((team) =>
      team.manufacturer.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    setFilteredTeams(filtered);
  };

  const onDriverClick = (driverName) => {
    console.log("Driver clicked:", driverName);
    const foundDriver = drivers.find((driver) => driver.name === driverName);
    setSelectedDriver(foundDriver);
  };

  return (
    <div>
      <Navbar bgColor="bg-white" linkColor="black" position="relative" />
      <section className="px-4 py-4 md:p-8 max-w-7xl mx-auto">
        <TeamSearch
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        <TeamList teams={filteredTeams} onDriverClick={onDriverClick} />
      </section>
      {selectedDriver && (
        <TeamDriverModal
          driver={selectedDriver}
          onClose={() => setSelectedDriver(null)}
        />
      )}
    </div>
  );
};

export default TeamsPage;
