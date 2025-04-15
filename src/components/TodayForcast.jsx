import React from "react";
import { IoPartlySunnySharp } from "react-icons/io5";
import { useWeather } from "../weatherContext/index";


const TodayForcast = () => {
  const { weatherForcastData } = useWeather();

  const date = weatherForcastData?.list?.[0]?.dt_txt
  
  
  const todayForCastData = [
    {
      id: 1,
      label: weatherForcastData?.list?.[0]?.dt_txt,
      icon: weatherForcastData?.list?.[0]?.weather?.[0]?.icon,
      temp: weatherForcastData?.list?.[0]?.main?.temp,
    },
    {
      id: 2,
      label: weatherForcastData?.list?.[1]?.dt_txt,
      icon: weatherForcastData?.list?.[1]?.weather?.[0]?.icon,
      temp: weatherForcastData?.list?.[1]?.main?.temp,
    },
    {
      id: 3,
      label: weatherForcastData?.list?.[2]?.dt_txt,
      icon: weatherForcastData?.list?.[2]?.weather?.[0]?.icon,
      temp: weatherForcastData?.list?.[2]?.main?.temp,
    },
    {
      id: 4,
      label: weatherForcastData?.list?.[3]?.dt_txt,
      icon: weatherForcastData?.list?.[3]?.weather?.[0]?.icon,
      temp: weatherForcastData?.list?.[3]?.main?.temp,
    },
  ];

  return (
    <div className="w-full p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
      <h1 className="text-white text-xl font-semibold mb-6 tracking-wide">
        Today's Forecast
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {todayForCastData.map((data) => (
          <div
            key={data.id}
            className="group flex flex-col items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            <span className="text-sm font-medium text-white/80 mb-1">
              {data.label}
            </span>

            <div className="transition-transform duration-300 group-hover:scale-125">
            <img
            
            className="w-full bg-cover"
            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt="weather-image"
          />
            </div>

            <span className="text-lg font-bold text-white">
              {Math.round(data.temp)}°
              <span className="text-sm align-top">C</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayForcast;
