import { useContext, useEffect, useState } from "react";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import fewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import ThunderStormimage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import Header from "./components/header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import { WeatherContext } from "./context/index.js";

export default function Page() {
    const { weatherData } = useContext(WeatherContext);
    const [climateImage, setClimateimage] = useState("");

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatteredCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormimage;
            case "Fog":
                return WinterImage;
            case "Mist":
                return MistImage;
            case "Haze":
                return fewCloudsImage;
            default:
                return ClearSkyImage;
        }
    }
    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate);
        setClimateimage(bgImage);
    }, [weatherData.climate]);
    return (
        <>
            <div
                style={{ backgroundImage: `url('${climateImage}')` }}
                className="bg-body font-[Roboto] bg-no-repeat bg-cover text-light bg-[url('../assets/body-bg.png')] h-screen grid place-items-center"
            >
                {/*Header component*/}
                <Header />
                {/*main content*/}
                <main>
                    <section className="">
                        {/*weather board component*/}

                        <WeatherBoard />
                    </section>
                </main>
            </div>
        </>
    );
}
