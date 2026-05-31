import { useContext } from "react";
import weatherContext from "../../context/weatherContext.js";
import AddtoFevourite from "./AddtoFevourite";
import WeatherCondition from "./WeatherCondition.jsx";
import Weatherheadline from "./weatherheadline";

export default function WeatherBoard() {
    //weather-context-----------------------------
    const { isLoading } = useContext(weatherContext);

    return (
        <div className="container">
            <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/14 px-4 lg:px-14 py-6 lg:py-10 min-h-130 max-w-264.5 mx-auto">
                <div className="grid md:grid-cols-2 gap-10 md:gap-x-40">
                    {isLoading.state ? (
                        <p className="text-white text-4xl"> {isLoading.message} </p>
                    ) : (
                        <>
                            {/* add to favourite component --------------*/}
                            <AddtoFevourite />
                            {/* weather headline component --------------*/}
                            <Weatherheadline />
                            {/* weather data component -----------------*/}
                            <WeatherCondition />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
