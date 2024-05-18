import React from "react";
import styles from "./Styles/About.css";
// import clouds from '../assets/'

const About = () => {
  return (
    <div className="block">
      <div className="about-container" style={styles}>
        <b>
          <h1>Weather App</h1>
        </b>
        <p>
          Welcome to our Weather App, your go-to solution for up-to-date weather
          information tailored to your location. Whether you're planning your
          day, preparing for a trip, or simply curious about the current
          weather, our app provides accurate and comprehensive weather data
          right at your fingertips.
        </p>
        <hr/>
        <h2>Key Features:</h2>
        <ul>
          <li>
            <strong>City Search:</strong> Simply enter the name of any city to
            receive detailed weather information. Our intuitive search function
            makes it easy to find weather data for any location worldwide.
          </li>
          <li>
            <strong>Location-Based Weather:</strong> Enable location services on
            your device, and our app will automatically detect your location to
            provide real-time weather updates specific to where you are.
          </li>
          <li>
            <strong>Detailed Weather Information:</strong> Get a complete
            weather overview including:
            <ul>
              <li>
                <strong>Temperature:</strong> Current temperature, along with
                maximum and minimum temperatures for the day.
              </li>
              <li>
                <strong>Feels Like:</strong> Perceived temperature based on
                humidity and wind speed.
              </li>
              <li>
                <strong>Humidity:</strong> Current humidity level, providing
                insights into air moisture.
              </li>
              <li>
                <strong>Wind Speed:</strong> Wind conditions to help you
                understand the weather better.
              </li>
            </ul>
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Our app is designed with
            simplicity and ease of use in mind, ensuring that you can access the
            information you need quickly and effortlessly.
          </li>
        </ul>
        <hr/>
        <h2>Special Thanks:</h2>
        <p>
          We extend our heartfelt thanks and regards to{" "}
          <b>
            <i>
              <a
                href="https://openweathermap.org/"
                style={{ textDecoration: "none" }}
              >
                OpenMapWeather
              </a>
            </i>
          </b>{" "}
          for providing the reliable and accurate weather data that powers our
          app. Their comprehensive API ensures that we deliver the most precise
          and current weather information to our users.
        </p>
        <hr/>
        <h2>Get Started:</h2>
        <p>
          Go to our Weather Application today and stay informed about the
          weather conditions that matter to you. Whether you're at home, at
          work, or on the go, our app is your trusted companion for all things
          weather-related.
        </p>
      </div>
    </div>
  );
};

export default About;
