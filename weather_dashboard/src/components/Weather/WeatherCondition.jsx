import { useContext } from "react";
import cloudIcon from "../../assets/icons/cloud.svg";
import humidityIcon from "../../assets/icons/humidity.svg";
import maxTempIcon from "../../assets/icons/temp-max.svg";
import minTempIcon from "../../assets/icons/temp-min.svg";
import windIcon from "../../assets/icons/wind.svg";
import { WeatherContext } from "../../context/index.js";

export default function Weatherdata() {
    const { weatherData } = useContext(WeatherContext);
    const {
        maxTemperature,
        minTemperature,
        humidity,
        cloudPercentage,
        wind,
        climate,
    } = weatherData;

    return (
        <div>
            {/* weather title ----------------------------------------------------------------------*/}
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">
                The climate is <u>{climate}</u>
            </p>

            {/* weather data list ---------------------------------------*/}
            <ul className="space-y-6 lg:space-y-6">
                {/*max_temprature----------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(maxTemperature)}</p>
                        <img src={maxTempIcon} alt="temp-max" />
                    </div>
                </li>

                {/*min_temprature----------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(minTemperature)}</p>
                        <img src={minTempIcon} alt="temp-min" />
                    </div>
                </li>

                {/*humidity------------------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>{humidity}%</p>
                        <img src={humidityIcon} alt="humidity" />
                    </div>
                </li>

                {/*cloud-----------------------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{cloudPercentage}%</p>
                        <img src={cloudIcon} alt="cloudy" />
                    </div>
                </li>

                {/*wind---------------------------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{wind}km/h</p>
                        <img src={windIcon} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    );
}
