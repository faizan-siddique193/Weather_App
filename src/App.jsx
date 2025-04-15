import React from "react";
import { WeatherProvider } from "./weatherContext/index";
import {
  AirCondition,
  CurrentWeather,
  SevenDayForcast,
  SearchComponent,
  TodayForcast,
} from "./components";
import backgroundImage from "./assets/background_image.jpg"
const App = () => {
  return (
    <WeatherProvider>
      <div 
      style={{backgroundImage: "url(backgroundImage)"}}
      className="w-full min-h-screen bg-blue-800 p-4 md:p-6 lg:p-8">
        <div className="max-w-2xl mx-auto  space-y-3">
          {/* search bar */}
          <div>
          <SearchComponent />
          <CurrentWeather />
          </div>
          <TodayForcast />
          <AirCondition />
          {/* <SevenDayForcast /> */}
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;
