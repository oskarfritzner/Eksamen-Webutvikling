/*
    DriverCard Component
    Represents a single driver card displaying driver information.
    It can switch between display and edit modes based on the `isEditing` prop.
    
    Props:
    - driver: The driver data to be displayed.
    - onEditClick: Function to handle the edit button click event.
    - onDeleteClick: Function to handle the delete button click event.
    - isEditing: Boolean indicating if the card is in edit mode.
    - editFormData: Object containing data of the driver being edited.
    - onEditFormChange: Function to handle changes in the edit form inputs.
    - onConfirmClick: Function to handle the confirm button click event after editing.
    - backendBaseUrl: Base URL for the backend server, used to construct image URL.
*/

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
