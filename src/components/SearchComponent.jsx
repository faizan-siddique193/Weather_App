import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useWeather } from "../weatherContext/index";
const SearchComponent = () => {
  const { setLocation } = useWeather();
  const [searchCity, setSearchCity] = useState("");
  // function for handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimSearchCity = searchCity.trim(); // remove white spaces
    setLocation(trimSearchCity);
    setSearchCity("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-full mx-auto"
    >
      <div className="w-full flex items-center border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg transition-all duration-300 hover:bg-white/20 focus-within:bg-white/20 focus-within:ring-2 focus-within:ring-blue-400/30 shadow-lg hover:shadow-xl">
        <input
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          className="w-full focus:outline-none px-4 py-3 bg-transparent text-white placeholder:text-gray-300 text-sm font-light"
          type="text"
          placeholder="Search city..."
        />
        <button
          type="submit"
          className="pr-4 pl-2 py-3 hover:text-blue-300 transition-colors duration-200"
        >
          <CiSearch className="text-xl text-white/80 hover:text-white" />
        </button>
      </div>
    </form>
  );
};

export default SearchComponent;
