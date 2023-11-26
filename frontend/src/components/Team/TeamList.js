/*
    TeamList Component
    Renders a grid of team cards, each showing the team's manufacturer name, image, and drivers.
    
    Props:
    - teams: Array of team objects to be displayed.
    - onDriverClick: Function to handle clicks on driver names.
    
    This component displays a list of F1 teams as cards. Each card includes the team's image, 
    manufacturer's name, and clickable driver names (if available). Clicking on a driver's name will
    trigger the onDriverClick function passed as a prop, allowing parent components to react accordingly 
    (such as opening a modal with the driver's details).
*/

const TeamList = ({ teams, onDriverClick }) => {
    const backendBaseUrl = "https://localhost:7093";
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-shadow duration-200">
            <img
              src={`${backendBaseUrl}${team.image}`}
              alt={team.manufacturer}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">{team.manufacturer}</h3>
              <p className="text-sm text-gray-500 mb-1">Team Number: {team.id}</p>
              <div className="text-sm text-blue-500">
                {team.driver1 || team.driver2 ? 'Drivers: ' : ''}
                {team.driver1 && (
                  <button
                    onClick={() => onDriverClick(team.driver1)}
                    className="hover:text-blue-700"
                  >
                    {team.driver1}
                  </button>
                )}
                {team.driver1 && team.driver2 && ', '}
                {team.driver2 && (
                  <button
                    onClick={() => onDriverClick(team.driver2)}
                    className="hover:text-blue-700"
                  >
                    {team.driver2}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default TeamList;
  
  
