/*
  RaceList Component
  Renders a list of all races with basic information and provides the functionality to select a race.
    
  Props:
  races: Array of race objects to be displayed.
  onRaceSelect: Function to handle the selection of a race.

  This component creates a list showing basic information about each race, such as the name of the Grand Prix 
  and the winner. Each race item in the list is clickable, allowing the user to select a race. When selected, 
  the onRaceSelect function is triggered, to display more detailed information about the chosen race. 
  The races are displayed in a list which is located differently based on screensize
 */

const RaceList = ({ races, onRaceSelect }) => {
  return (
    <div className="md:w-3/4 md:pr-8">
      <h2 className="text-2xl font-bold mb-4">Races</h2>
      <div className="border-b border-gray-200">
        {races.map((race) => (
          <div
            key={race.id}
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex flex-col md:flex-row justify-between"
            onClick={() => onRaceSelect(race)}
          >
            <p>Grand Prix: {race.grandPrix}</p>
            <p>Winner: {race.winner}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceList;
