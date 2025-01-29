import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setError(null);
    try {
      const response = await axios.post("https://weatherapp-chi-puce.vercel.app/api/weather", {
        location
      });
      setWeatherData(response.data);
    } catch (err) {
      setError("Could not fetch weather data. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-4">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Get Weather
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weatherData && (
        <div className="mt-6 p-4 bg-white rounded shadow-md border border-gray-300 text-center w-full max-w-md">
          <h2 className="text-xl font-semibold">{weatherData.location.name}</h2>
          <p className="text-lg">Temperature: {weatherData.current.temp_c}°C</p>
          <p className="text-lg">Humidity: {weatherData.current.humidity}%</p>
          <p className="text-lg">Local Time: {weatherData.location.localtime}</p>
          <p className="text-lg">
            {weatherData.current.is_day ? "Day" : "Night"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;