import { WeatherContext } from "../context/index.js";
import { useWeather } from "../hooks/index.js";

const WeatherProvider = ({ children }) => {
    const { weatherData, error, isLoading } = useWeather();
    return (
        <WeatherContext.Provider value={{ weatherData, error, isLoading }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
