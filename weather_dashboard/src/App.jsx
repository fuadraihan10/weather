import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import {WeatherProvider,FavouriteProvider} from "./provider/index.js";

function App() {
    return (
        <WeatherProvider>
            <FavouriteProvider>
                <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
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
            </FavouriteProvider>
        </WeatherProvider>
    );
}

export default App;
