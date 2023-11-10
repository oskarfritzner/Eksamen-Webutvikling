import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Frontpage from './pages/FrontPage.js';
import Quiz from './pages/QuizPage.js';
import Races from './pages/RacesPage.js';
import DriversPage from './pages/DriversPage.js';
import TeamsPage from './pages/TeamsPage.js';
import RegisterDriver from './pages/RegistrationPage.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path='Drivers' element={<DriversPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/races" element={<Races />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/register-driver" element={<RegisterDriver />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
