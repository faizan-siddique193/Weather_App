import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { WiRaindrop } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { Eye } from "lucide-react";
import { useWeather } from "../weatherContext";

const AirCondition = () => {
  const { currentWeatherData } = useWeather();

  // Handle missing data safely
  const realFeel = currentWeatherData?.main?.temp ?? "N/A";
  const humidity = currentWeatherData?.main?.humidity ?? "N/A";
  const windSpeed = currentWeatherData?.wind?.speed
    ? ((currentWeatherData.wind.speed * 3600) / 1000).toFixed(2)
    : "N/A";
  const visibility = currentWeatherData?.visibility
    ? (currentWeatherData.visibility / 1000).toFixed(2)
    : "N/A";

  const conditionData = [
    {
      id: 1,
      icon: <CiTempHigh className="text-2xl text-yellow-300/90" />,
      label: "Real Feel",
      value: realFeel,
      unit: "°C",
    },
    {
      id: 2,
      icon: <WiRaindrop className="text-2xl text-blue-300" />,
      label: "Humidity",
      value: humidity,
      unit: "%",
    },
    {
      id: 3,
      icon: <FaWind className="text-2xl text-white/80" />,
      label: "Wind",
      value: windSpeed,
      unit: "km/h",
    },
    {
      id: 4,
      icon: <Eye className="text-2xl text-purple-300" />,
      label: "Visibility",
      value: visibility,
      unit: "km",
    },
  ];

  return (
    <div className="w-full p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
      <h1 className="text-white text-xl font-semibold mb-6 tracking-wide">
        Air Conditions
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {conditionData.map((data) => (
          <div
            key={data.id}
            className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="shrink-0">{data.icon}</span>
              <span className="text-white/80 text-sm">{data.label}</span>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-white">{data.value}</span>
              <span className="text-sm text-white/60">{data.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirCondition;
