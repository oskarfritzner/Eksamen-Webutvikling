/*
    TeamList Component
    Renders a grid of team cards, each showing the team's manufacturer name and image.
    
    Props:
    - teams: Array of team objects to be displayed.
    
    This component is responsible for displaying a list of F1 teams. Each team is represented as a card 
    containing an image and the manufacturer's name. The component maps over the 'teams' array passed as a prop, 
    generating a card for each team. The image for each team is sourced from the provided backendBaseUrl combined 
    with the team's image path. Additionally, each card shows the manufacturer's name and the team's ID for 
    identification. The layout of the cards is responsive, adjusting from a single column on smaller screens 
    to multiple columns on larger screens for a better visual experience.
 */

const TeamList = ({ teams }) => {
    const backendBaseUrl = 'https://localhost:7093';

    // JSX for rendering the grid of team cards.
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map(team => (
                <div key={team.id} className="bg-white rounded-lg shadow p-4">
                    <img 
                        src={`${backendBaseUrl}${team.image}`}
                        alt={team.manufacturer} 
                        className="w-full h-48 object-cover rounded"
                    />
                    <div className="mt-2">
                        <h3 className="text-lg font-semibold">{team.manufacturer}</h3>
                        <p>Team Number: {team.id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamList;
