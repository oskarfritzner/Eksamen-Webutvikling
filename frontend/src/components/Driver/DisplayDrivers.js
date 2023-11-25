import React from 'react';
import DriverCard from './DriverCard';

const DisplayDrivers = ({ drivers, handleEditClick, handleDeleteClick, editDriverId, editFormData, handleEditFormChange, handleConfirmClick, backendBaseUrl }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
