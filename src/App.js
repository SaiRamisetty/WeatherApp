import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import WeatherForm from './Components/WeatherForm';
import WeatherResult from './Components/WeatherResults';
import About from './Components/About';

function App() {
  const [WeatherData, setWeatherData] = useState(null);
  const [Error , setError] = useState('');
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/WeatherApp" element={<WeatherForm setWeatherData={setWeatherData} setError={setError} />} />
        <Route path="/result" element={<WeatherResult weatherData={WeatherData} Error = {Error} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
