import { useState } from "react";

function WeatherApp() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function getWeather() {

    const demoData = {
      city: city,
      temp: "32°C",
      condition: "Sunny",
      humidity: "65%",
      wind: "12 km/h",
    };

    setWeather(demoData);
  }

  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center justify-center p-5">

      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-5">
          Weather App
        </h1>

        <input
          type="text"
          placeholder="Enter city"
          className="border w-full p-3 rounded-lg mb-4"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={getWeather}
          className="bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-700"
        >
          Get Weather
        </button>

        {weather && (
          <div className="mt-6 text-center">

            <h2 className="text-2xl font-bold">
              {weather.city}
            </h2>

            <p className="text-xl mt-2">
              {weather.temp}
            </p>

            <p className="text-gray-600">
              {weather.condition}
            </p>

            <p className="mt-2">
              Humidity: {weather.humidity}
            </p>

            <p>
              Wind: {weather.wind}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default WeatherApp;