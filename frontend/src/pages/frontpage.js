import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navigation-Bar";

const Frontpage = () => {
    const backgroundImageUrl = "/images/bg-frontpage1.jpg";
    return(
        <div
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            className="h-screen bg-cover bg-center bg-no-repeat"
        >
            <Navbar />
            <div className="flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-75">
                <h1 className="text-center text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-4">Welcome to the F1 Special Event</h1>
                <p className="text-center text-xl text-white mb-8">Experience the thrill of the race.</p>
                <Link to={"/register-driver"}>
                <button className="bg-f1-red text-white py-4 px-10 rounded-xl text-xl">
                    Register for the event
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Frontpage;
