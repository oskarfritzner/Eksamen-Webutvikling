import React from 'react';

const RaceDetails = ({ selectedRace, drivers }) => {
  const getWinnerDetails = () => {
    if (selectedRace) {
      const winner = drivers.find(
        (driver) => driver.name === selectedRace.winner
      );
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
      ) : (
        <p>No matching driver found.</p>
      );
    }
    return null;
  };

  return (
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
      ) : (
        <p>Select a race to view details.</p>
      )}
    </div>
  );
};

export default RaceDetails;
