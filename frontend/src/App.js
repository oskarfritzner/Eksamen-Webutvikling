import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar'; // Ensure you have the correct path to your Navbar component
import Frontpage from './pages/frontpage';
import Quiz from './pages/quiz-page';
import Races from './pages/races-page';
import TeamsAndDriversPage from './pages/teams-and-drivers-page';
import RegisterDriver from './pages/registration-page';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/teams-and-drivers" element={<TeamsAndDriversPage />} />
          <Route path="/races" element={<Races />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/register-driver" element={<RegisterDriver />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
