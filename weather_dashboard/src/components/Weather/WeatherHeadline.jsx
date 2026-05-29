import { useContext } from "react";
import pin from "../../assets/pin.svg";
import { weatherContext } from "../../context/index.js";
import getFormatedDate from "../../utils/date-utils.js";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import RainIcon from "../../assets/rainy.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import ThunderIcon from "../../assets/thunder.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";

export default function Weatherheadline() {
    const { weatherData } = useContext(weatherContext);
    const { climate, location, temperature, time } = weatherData;

    function getWeatherIcon(climate) {
        switch (climate) {
            case "Clouds":  
                return CloudIcon;
            case "Fog":  
                return HazeIcon;
            case "Rain":  
                return RainIcon;
            case "Snow":  
                return SnowIcon;
            case "Thunder":  
                return ThunderIcon;
            case "Clear":  
                return SunnyIcon;
            case "Haze":  
                return HazeIcon;
        }
    }

    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                {/*weather image--------*/}
                <img src={getWeatherIcon(climate)} alt="dynamic" />
                {/*main--------------------------------------*/}
                <div className="max-md:flex items-center max-md:space-x-4">
                    {/*temprature----------*/}
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                        {Math.round(temperature)}°C
                    </h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={pin} alt="pin" />
                        {/*location--------------*/}
                        <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                    </div>
                </div>
            </div>
            {/*time-date*/}
            <p className="text-sm lg:text-lg">
                {getFormatedDate(time, "time", false)}
                    -
                {getFormatedDate(time, "date", false)}
            </p>
        </div>
    );
}
