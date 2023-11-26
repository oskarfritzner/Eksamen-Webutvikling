/*
    TeamSearch Component
    Provides an input field for users to search among the teams by manufacturer name.

    Props:
    - searchTerm: The current search term used to filter teams.
    - onSearchChange: Function to handle changes to the search input.

    This component presents an input field where users can type in a search term. The 'searchTerm' prop 
    reflects the current state of the search query. As users type into the input field, the 'onSearchChange' 
    prop is called, which is a function passed from the parent component to handle updates to the search term.
    The component is styled with a border and rounded corners, ensuring a consistent and user-friendly design.
    This input field is a key part of providing a dynamic and interactive user experience, allowing users to 
    quickly filter and find teams based on the manufacturer's name.
*/

const TeamSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search teams by manufacturer..."
        value={searchTerm}
        onChange={onSearchChange}
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default TeamSearch;
