import DriverCard from './DriverCard';

/*
    DisplayDrivers Component
    Renders a grid of driver cards.

    Props:
    - drivers: Array of driver objects to display.
    - handleEditClick: Function to handle click event for editing a driver.
    - handleDeleteClick: Function to handle click event for deleting a driver.
    - editDriverId: ID of the driver currently being edited.
    - editFormData: Data of the driver currently being edited.
    - handleEditFormChange: Function to handle form changes when editing a driver.
    - handleConfirmClick: Function to handle click event to confirm driver edits.
    - backendBaseUrl: Base URL of the backend server.
 */

const DisplayDrivers = ({ drivers, handleEditClick, handleDeleteClick, editDriverId, editFormData, handleEditFormChange, handleConfirmClick, backendBaseUrl }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {drivers.map(driver => (
                <DriverCard
                    key={driver.id}
                    driver={driver}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteClick}
                    isEditing={editDriverId === driver.id}
                    editFormData={editFormData}
                    onEditFormChange={handleEditFormChange}
                    onConfirmClick={handleConfirmClick}
                    backendBaseUrl={backendBaseUrl}
                />
            ))}
        </div>
    );
};

export default DisplayDrivers;
