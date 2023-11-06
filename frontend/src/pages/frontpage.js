import React from 'react';
import Navbar from "../components/navbar"; // Assuming you have the Navbar component at this path.

const Frontpage = () => {
    const backgroundImageUrl = "/images/bg-frontpage1.jpg";
    return( 
        <div
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            className="h-screen bg-cover bg-center bg-no-repeat"
        >
            <div className="flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-75">
                <h1 className="text-5xl text-white font-bold mb-4">Welcome to the F1 Special Event</h1>
                <p className="text-xl text-white mb-8">Experience the thrill of the race.</p>
                <button className="bg-white py-4 px-10 rounded-xl text-xl">
                    Register for the event
                </button>
            </div>
        </div>
    )
}

export default Frontpage;
