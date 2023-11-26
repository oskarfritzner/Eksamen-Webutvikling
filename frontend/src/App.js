import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontpage from './pages/frontpage.js';
import Quiz from './pages/QuizPage.js';
import Races from './pages/RacesPage.js';
import DriversPage from './pages/DriversPage.js';
import TeamsPage from './pages/TeamsPage.js';
import RegisterDriver from './pages/RegistrationPage.js';
import Footer from './components/Navigation/Footer.js';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path='Drivers' element={<DriversPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/races" element={<Races />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/register-driver" element={<RegisterDriver />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
