import React from "react";
import { IoSunny } from "react-icons/io5";

const SevenDayForecast = () => {
  const forecastData = [
    { id: 1, day: "Monday", temp: 36, condition: "Sunny" },
    { id: 2, day: "Tuesday", temp: 34, condition: "Cloudy" },
    { id: 3, day: "Wednesday", temp: 32, condition: "Rainy" },
    { id: 4, day: "Thursday", temp: 35, condition: "Sunny" },
    { id: 5, day: "Friday", temp: 33, condition: "Stormy" },
    // { id: 6, day: "Saturday", temp: 37, condition: "Clear" },
    // { id: 7, day: "Sunday", temp: 38, condition: "Sunny" },
  ];

  return (
    <div className="w-full p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 mt-6">
      <h1 className="text-white text-xl font-semibold mb-4 tracking-wide">
        7-Day Forecast
      </h1>
      
      <div className="space-y-3">
        {forecastData.map((data) => (
          <div
            key={data.id}
            className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            <span className="text-white/80 font-medium w-28">
              {data.day}
            </span>
            
            <div className="flex items-center gap-4 flex-1 max-w-[200px]">
              <IoSunny className="w-8 h-8 text-yellow-300 transition-transform duration-300 group-hover:scale-125" />
              <span className="text-white/80 text-sm">
                {data.condition}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">
                {data.temp}°
              </span>
              <span className="text-sm text-white/60">C</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SevenDayForecast;