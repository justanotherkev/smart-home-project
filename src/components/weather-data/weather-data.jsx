import React from "react";
import s from "./weather-data.module.css/";
import { useEffect, useState } from "react";
import FactorDetails from "../factor-details/factor-details";
import { Thermostat, Thunderstorm } from "@mui/icons-material";

function WeatherData() {
  const [temperature, setTemperature] = useState("0");
  const [rainChance, setRainChance] = useState("0");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };

    const timer = setInterval(updateDate, 1000);
    const cleanUp = () => {
      clearInterval(timer);
    };

    return cleanUp;
  }, []);

  useEffect(() => {
    const getWeather = async (coords) => {
      const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
      const latitude = coords.coords.latitude;
      const longitude = coords.coords.longitude;

      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();

      setRainChance(data.current.cloud);
      setTemperature(data.current.temp_c);
      setWeatherIcon(data.current.condition.icon);
    };
    // INLCUDE LONGITUDE AND LATITUDE
    navigator.geolocation.getCurrentPosition(getWeather);
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const lastDigit = date
    .getDate()
    .toString()
    .charAt(date.getDate().toString().length - 1);

  let daySuffix;

  if (lastDigit == "1" && date.getDate().toString() != "11") {
    daySuffix = "st";
  } else if (lastDigit == "2" && date.getDate().toString() != "12") {
    daySuffix = "nd";
  } else if (lastDigit == "3" && date.getDate().toString() != "13") {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }

  return (
    <div className={s.weatherData}>
      <div className={s.date_and_time}>
        <div className={s.date_and_time_items}>
          <h1 className={s.time}>
            {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:
            {date.getMinutes() < 10
              ? "0" + date.getMinutes()
              : date.getMinutes()}
          </h1>
          <img src={weatherIcon} />
        </div>
        <h2>SOME NEW TEXT</h2>
        <p className={s.date}>
          {days[date.getDay()] +
            " " +
            date.getDate() +
            daySuffix +
            " " +
            months[date.getMonth()] +
            " " +
            date.getFullYear()}
        </p>
      </div>

      <div className={s.temp_and_rain}>
        <FactorDetails
          icon={<Thermostat style={{ fontSize: 20 }} />}
          title="Temperature"
          reading={temperature}
          units="°C"
        />
        <FactorDetails
          icon={<Thunderstorm style={{ fontSize: 20 }} />}
          title="Chance of rain"
          reading={rainChance}
          units="%"
        />
      </div>
    </div>
  );
}

export default WeatherData;
