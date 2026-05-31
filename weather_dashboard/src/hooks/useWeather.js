import { useCallback, useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/index.js";

//main function to fetch weather data---------------------------
export default function useWeather() {
    //weatherdata template------------
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });
    const [isLoading, setIsLoading] = useState({ state: false, message: "" });

    const [error, setError] = useState(null);

    const { selectedLocation } = useContext(LocationContext);

    //fetching weather data function according to latitude and longitude------------------------------------------------------
    const fetchWeatherData = useCallback(async (latitude, longitude) => {
        //main code to fetch weather data from openweathermap API----------------------
        try {
            setIsLoading({ state: true, message: "Fetching weather data..." });

            //fetching weather data ----------------------
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
            );

            //if response causes any error-------------
            if (!response.ok) {
                throw new Error(
                    `Fetching weather data failed: ${response.status}`,
                );
            }

            const data = await response.json();

            //adding actual weather data to the weatherdata state-----------------
            setWeatherData({
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude,
                latitude,
            });
        } catch (err) {
            //error handling---------------------------
            setError(err);
        } finally {
            // after fetching data-----------------
            setIsLoading({ state: false, message: "" });
        }
    }, []);
    //-----------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        setIsLoading({ state: true, message: "Finding location..." });
        if (selectedLocation.latitude && selectedLocation.longitude) {
            fetchWeatherData(
                selectedLocation.latitude,
                selectedLocation.longitude,
            );
        } else {
            //collectiong users latitude and longitude-------------
            navigator.geolocation.getCurrentPosition(
                //if location found------------
                (position) => {
                    //calling the main function (async)-----------------
                    fetchWeatherData(
                        position.coords.latitude,
                        position.coords.longitude,
                    );
                },
                //if location is not found ------------------------
                (err) => {
                    setError(
                        new Error("Location access denied: " + err.message),
                    );
                    setIsLoading({ state: false, message: "" });
                },
            );
        }
    }, [
        fetchWeatherData,
        selectedLocation.latitude,
        selectedLocation.longitude,
    ]);

    //return the states
    return { weatherData, error, isLoading };
}
