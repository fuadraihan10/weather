import cloudIcon from "../../assets/icons/cloud.svg";
import humidityIcon from "../../assets/icons/humidity.svg";
import maxTempIcon from "../../assets/icons/temp-max.svg";
import minTempIcon from "../../assets/icons/temp-min.svg";
import windIcon from "../../assets/icons/wind.svg";

export default function Weatherdata() {
    return (
        <div>
            {/* weather title ----------------------------------------------------------------------*/}
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">
                thunderstorm with light drizzle
            </p>

            {/* weather data list ---------------------------------------*/}
            <ul className="space-y-6 lg:space-y-6">
                {/*max_temprature----------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>19°</p>
                        <img src={maxTempIcon} alt="temp-max" />
                    </div>
                </li>

                {/*min_temprature----------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>19°</p>
                        <img src={minTempIcon} alt="temp-min" />
                    </div>
                </li>

                {/*humidity------------------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>58%</p>
                        <img src={humidityIcon} alt="humidity" />
                    </div>
                </li>

                {/*cloud-----------------------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>86%</p>
                        <img src={cloudIcon} alt="cloudy" />
                    </div>
                </li>

                {/*wind---------------------------------------------*/}
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>5km/h</p>
                        <img src={windIcon} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    );
}
