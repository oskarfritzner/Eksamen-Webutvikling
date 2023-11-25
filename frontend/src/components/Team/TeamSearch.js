import React from 'react';

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
