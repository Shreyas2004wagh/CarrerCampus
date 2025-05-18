import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Assessment from './pages/Assessment';
import Results from './pages/Results';
import CareerSample from './pages/carrerSample'; // Fixed import path to match actual filename

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/results" element={<Results />} />
        <Route path="/careerSample" element={<CareerSample />} />
      </Routes>
    </Router>
  );
}

export default App;