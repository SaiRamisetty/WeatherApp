// WeatherResult.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/WindResults.css";
import temp from "../assets/rain.gif";
import location from "../assets/location.gif";
import wind from "../assets/wind.gif";
import humi from "../assets/drop.gif";
import flike from "../assets/thermometer.gif";
import maxtemp from "../assets/sunrise.gif";
import mintemp from "../assets/sunset.gif";
import weatherr from "../assets/mountain.gif";
const WeatherResult = ({ weatherData, Error }) => {
  const navigate = useNavigate();
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const Day = dateTime.toLocaleDateString("en-US", { weekday: "long" });
  if (!weatherData) {
    return (
      <div className="errorblock">
        <div className="errorblock2">
          <h1 style={{ fontFamily: "poppins", fontSize: "30px" }}> {Error}</h1>
          <button
            style={{ borderRadius: "30px" }}
            onClick={() => navigate("/WeatherApp")}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="netcontainer">
        <div className="mx-3">
          <button
            style={{ borderRadius: "20px", padding: "10px 30px" }}
            onClick={() => navigate("/WeatherApp")}
          >
            ← Back
          </button>
        </div>
        <div className="Dashboard" style={styles}>
          <div className="Block">
            <div className="block-1">
              <div className="location">
                <div className="locationsub1">
                  <img src={location} alt="location" />
                  <h3>{weatherData.name}</h3>
                </div>
                <div className="locationsub2">
                  <h2>{Day}</h2>
                  <h4>{formattedDate}</h4>
                  <h5> {formattedTime}</h5>
                </div>
              </div>
              <div className="heat">
                <div className="temperature">
                  <img src={temp} alt="temperature" />
                  <p>Temperature</p>
                  <h1 className="temp">
                    {(weatherData.main.temp - 273).toFixed(2)}
                    <sup>℃</sup>
                  </h1>
                </div>
                <div className="tempcomp">
                  <div className="feelslike">
                    <div className="feelslikesub mx-2">
                      <img src={flike} alt="Feels_Like" />
                      <p>Feels Like</p>
                    </div>
                    <h4>
                      {(weatherData.main.feels_like - 273).toFixed(2)}
                      <sup>℃</sup>
                    </h4>
                  </div>
                  <div className="tempcompsub">
                    <div className="Maxtemp mx-2">
                      <img src={maxtemp} alt="max_temp" />
                      <p>Max Temp.</p>
                      <h5>
                        {(weatherData.main.temp_max - 273).toFixed(2)}
                        <sup>℃</sup>
                      </h5>
                    </div>
                    <div className="Mintemp mx-2">
                      <img src={mintemp} alt="Feels_Like" />
                      <p>Min Temp.</p>
                      <h5>
                        {(weatherData.main.temp_min - 273).toFixed(2)}
                        <sup>℃</sup>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-2 my-2">
              <div className="windspeed ">
                <img src={wind} alt="windspeed" />
                <p>Wind Speed</p>
                <h4 className="my-1">
                  {weatherData.wind.speed} <sub>m/sec</sub>
                </h4>
              </div>
              <div className="humidity">
                <img src={humi} alt="humidity" />
                <p>Humidity</p>
                <h4 className="my-1">{weatherData.main.humidity} % </h4>
              </div>
              <div className="description">
                <img src={weatherr} alt="weather" />
                <p>Weather Condition</p>
                <h4 className="my-1">{weatherData.weather[0].description}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherResult;
