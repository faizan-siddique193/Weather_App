import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
// create context
const WeatherContext = createContext(null);

// weather provider
export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [weatherForcastData, setWeatherForcastData] = useState(null);

  //   fetch current weather data
  useEffect(() => {
    if (!location) return;
    const fetchCurrentWeatherData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${
            import.meta.env.VITE_CURRENT_WEATHER_URI
          }?q=${location}&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );
        console.log("Api response:: ", response?.data);
        // store data in local storage
        localStorage.setItem(
          "currentWeatherData",
          JSON.stringify(response.data)
        );
        setCurrentWeatherData(response.data);
      } catch (error) {
        console.error("API Error:", error);
        setError(error?.response?.data?.message || error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentWeatherData();
  }, [location]);

  //   fetch weather forcast data
  useEffect(() => {
    if (!currentWeatherData?.coord) return;
    const fetchtWeatherForcastData = async () => {
      try {
        setIsLoading(true);
        const lat = currentWeatherData?.coord?.lat;
        const lon = currentWeatherData?.coord?.lon;
        const response = await axios.get(
          `${
            import.meta.env.VITE_WEATHER_FORECAST_URI
          }?lat=${lat}&lon=${lon}&exclude=minutely,daily&units=metric&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );
        console.log("Api response:: ", response?.data);
        // store data in local storage
        localStorage.setItem(
          "weatherForcastData",
          JSON.stringify(response.data)
        );
        setWeatherForcastData(response?.data);
      } catch (error) {
        console.error("API Error:", error);
        setError(error?.response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchtWeatherForcastData();
  }, [currentWeatherData]);

  useEffect(() => {
    try {
      const getCurrentWeatherDataFromLocalStorage = JSON.parse(
        localStorage.getItem("currentWeatherData")
      );
      const getWeatherForcastDataFromLocalStorage = JSON.parse(
        localStorage.getItem("weatherForcastData")
      );
      if (getCurrentWeatherDataFromLocalStorage) {
        setCurrentWeatherData(getCurrentWeatherDataFromLocalStorage);
      }
      if (getWeatherForcastDataFromLocalStorage) {
        setWeatherForcastData(getWeatherForcastDataFromLocalStorage);
      }
    } catch (error) {
      console.error(
        "Error while fetching data from local storage",
        error.message
      );
    }
  }, [location]);
  // memoize the context value
  const contextValue = useMemo(
    () => ({
      isLoading,
      error,
      setLocation,
      currentWeatherData,
      weatherForcastData,
    }),
    [isLoading, error, currentWeatherData, weatherForcastData]
  );
  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

// make custom hook "useWeather"
function useWeather() {
  return useContext(WeatherContext);
}

export default useWeather;
