import AddtoFevourite from "./AddtoFevourite";
import Weatherdata from "./Weatherdata";
import Weatherheadline from "./weatherheadline";
import {useWeather} from "../../hooks/index.js"

export default function WeatherBoard() {
        const{weatherData,error,isLoading} = useWeather()
        console.log(weatherData,error,isLoading);
    return (
        <div className="container">
            <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/14 px-4 lg:px-14 py-6 lg:py-10 min-h-130 max-w-264.5 mx-auto">
                <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                    {/* add to favourite component --------------*/}
                    <AddtoFevourite />
                    {/* weather headline component --------------*/}
                    <Weatherheadline />
                    {/* weather data component -----------------*/}
                    <Weatherdata />
                </div>
            </div>
        </div>
    );
}
