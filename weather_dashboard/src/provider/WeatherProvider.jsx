import {weatherContext} from "../context/index.js";
import { useWeather } from "../hooks/index.js";

const WeatherProvider = ({ children }) => {
    const { weatherData, error, isLoading } = useWeather();
    return (
        <weatherContext.Provider value={{ weatherData, error, isLoading }}>
            {children}
        </weatherContext.Provider>
    );
};

export default WeatherProvider;
