import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { useWeather } from "../weatherContext/index";
const CurrentWeather = () => {
  const { currentWeatherData, weatherForcastData } = useWeather();
  const rainChance = weatherForcastData?.list?.[0]?.pop;
  return (
    <section className="w-full max-w-3xl backdrop-blur-3xl">
      <div className="flex sm:flex-row flex-col-reverse justify-center items-center sm:justify-around">
        {/* cityname and chance of rain */}
        <div>
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              {currentWeatherData?.name}
            </h1>
            <p className="text-white text-sm">
              chance of rain: <span>{rainChance}%</span>
            </p>
          </div>
          {/* temperature*/}
          <div>
            <h1 className="text-6xl font-bold text-white  text-center sm:text-start">
              {Math.round(currentWeatherData?.main?.temp)}°
            </h1>
          </div>
        </div>
        {/* image or icon */}
        <div className="">
          <img
            // style={{ width: "200px", height: "200px" }}
            className="lg:w-64 lg:h-64 md:w-56 md:h-56 w-48 h-48"
            src={`https://openweathermap.org/img/wn/${currentWeatherData?.weather?.[0]?.icon}@2x.png`}
            alt="weather-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
