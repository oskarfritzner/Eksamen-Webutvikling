/*
  RaceDetails Component
  Displays detailed information about a selected race and the winner of the race.
  
  Props:
  - selectedRace: Object containing details of the race selected by the user.
  - drivers: Array of driver objects to find the race winner's details.
  
  This component renders detailed information about a selected race, such as the name of the Grand Prix, 
  winner, number of laps, and winner's time. If a race is selected, it also displays information about 
  the race winner, including their name, nationality, and a picture. The getWinnerDetails function 
  finds the winner's details from the list of drivers and returns the relevant JSX. If no race is 
  selected, the component prompts the user to select a race to view its details.
 */

const RaceDetails = ({ selectedRace, drivers }) => {

  // Function to find and display details of the race winner.
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

  // JSX for rendering race details and the winner's information.

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
