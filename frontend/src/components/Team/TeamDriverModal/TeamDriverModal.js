import "./TeamDriverModal.css";

const TeamDriverModal = ({ onClose, driver }) => {
  const backendBaseUrl = "https://localhost:7093";

  if (!driver) return null;

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <div className="modalHeader">
          <img
            src={`${backendBaseUrl}${driver.image}`}
            alt={driver.name}
            className="driverImage"
          />
          <h3 className="driverName">{driver.name}</h3>
          <p className="driverInfo">Age: {driver.age}</p>
          <p className="driverInfo">Nationality: {driver.nationality}</p>
        </div>
        <div className="text-center">
          <button onClick={onClose} className="closeButton">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamDriverModal;
