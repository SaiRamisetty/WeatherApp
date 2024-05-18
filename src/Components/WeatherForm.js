import axios from "axios";
import React, { useState } from "react";
import style from "./Styles/WeatherForm.css";
import { useNavigate } from "react-router-dom";

const WeatherForm = ({ setWeatherData }) => {
  const [Location, setLocation] = useState("");
  const navigate = useNavigate();

  const getWeather = async (coords) => {
    setWeatherData(null);
    const ApiKey = "46819be4bf673cd2b97e42fe138cc146";
    let ApiURL;

    if (coords) {
      const { latitude, longitude } = coords;
      ApiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;
    } else {
      ApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${ApiKey}`;
    }

    try {
      const response = await axios.get(ApiURL);
      setWeatherData(response.data);
      console.log(response.data);
      navigate("/result");
    } catch (err) {
      console.log("Fetching data from API was not successful");
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          getWeather(coords);
        },
        (error) => {
          console.log("Unable to retrieve your location");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  };

  return (
    <>
      <div className="weather" style={style}>
        <div className="forms">
          <h1>
            <b>Weather App</b>
          </h1>
          <hr />
          <form
            className="inputform my-3"
            onSubmit={(e) => {
              e.preventDefault();
              getWeather();
            }}
          >
            <input
              type="text"
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your Location"
            />
            <button className="mt-2" type="submit">
              Get Weather
            </button>
          </form>
          <button className="locate" onClick={getLocation}>
            Get Location
          </button>
        </div>
      </div>
    </>
  );
};

export default WeatherForm;
