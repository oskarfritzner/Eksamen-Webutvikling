import React from 'react';

const DriverCard = ({ driver, onEditClick, onDeleteClick, isEditing, editFormData, onEditFormChange, onConfirmClick, backendBaseUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <img 
                src={`${backendBaseUrl}${driver.image}`}
                alt={driver.name} 
                className="w-48 h-48 object-cover rounded-full mx-auto"
            />
            {isEditing ? (
                <div>
                    <input 
                        type="text" 
                        name="name" 
                        value={editFormData.name} 
                        onChange={onEditFormChange}
                        className="mt-2 p-2 border rounded w-full"
                    />
                    <input 
                        type="number" 
                        name="age" 
                        value={editFormData.age} 
                        onChange={onEditFormChange}
                        className="mt-2 p-2 border rounded w-full"
                    />
                    <input 
                        type="text" 
                        name="nationality" 
                        value={editFormData.nationality} 
                        onChange={onEditFormChange}
                        className="mt-2 p-2 border rounded w-full"
                    />
                    <button onClick={onConfirmClick} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Confirm</button>
                </div>
            ) : (
                <div className='mt-8'>
                    <h3 className="text-lg font-semibold">{driver.name}</h3>
                    <p>Age: {driver.age}</p>
                    <p>Nationality: {driver.nationality}</p>
                    <div className="flex justify-between mt-3">
                        <button onClick={() => onEditClick(driver)} className="px-4 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">Edit</button>
                        <button onClick={() => onDeleteClick(driver.id)} className="px-4 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DriverCard;
