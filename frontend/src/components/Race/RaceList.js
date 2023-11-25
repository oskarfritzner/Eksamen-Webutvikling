import React from 'react';

const RaceList = ({ races, onRaceSelect }) => {
  return (
    <div className="md:w-3/4 md:pr-8">
      <h2 className="text-2xl font-bold mb-4">Races</h2>
      <div className="border-b border-gray-200">
        {races.map((race) => (
          <div
            key={race.id}
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex justify-between"
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
