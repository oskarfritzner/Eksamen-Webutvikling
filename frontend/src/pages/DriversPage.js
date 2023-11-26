import React, { useState, useEffect } from "react";
import Navbar from "../components/Navigation/Navigation-Bar";
import DisplayDrivers from "../components/Driver/DisplayDrivers";
import {
  getAllDrivers,
  updateDriver,
  deleteDriver,
} from "../services/driverServices";
import Footer from "../components/Navigation/Footer";

const DriversPage = () => {
  // State declarations
  const [drivers, setDrivers] = useState([]);
  const [editDriverId, setEditDriverId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    age: "",
    nationality: "",
    image: "",
  });

  const backendBaseUrl = "https://localhost:7093";

  useEffect(() => {
    fetchDrivers(); // Fetch drivers data on component mount
  }, []);

  // Fetch drivers data from the backend
  const fetchDrivers = async () => {
    try {
      const data = await getAllDrivers();
      setDrivers(data); // Update state with fetched data
    } catch (error) {
      console.error("Failed to fetch drivers:", error);
    }
  };

  // Handles edit possibility on button click

  const handleEditClick = (driver) => {
    setEditDriverId(driver.id);
    setEditFormData({
      name: driver.name,
      age: driver.age,
      nationality: driver.nationality,
      image: driver.image,
    });
  };

  // Handles changing the inputs when in editing mode

  const handleEditFormChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  //Submits the edited fields as new data for the drivers, and updates the backend. Also fetches to display the new data in UI

  const handleConfirmClick = async () => {
    const updatedDriver = { ...editFormData, id: editDriverId };
    await updateDriver(updatedDriver);
    setEditDriverId(null);
    fetchDrivers();
  };

  // Handle delete button click and displays the updated drivers-list after deleting.

  const handleDeleteClick = async (driverId) => {
    await deleteDriver(driverId);
    fetchDrivers();
  };

  return (
    <div>
      <Navbar bgColor="bg-white" linkColor="black" position="relative" />
      <section className="px-4 py-4 md:p-8 max-w-7xl mx-auto">
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
      </section>
    </div>
  );
};

export default DriversPage;
