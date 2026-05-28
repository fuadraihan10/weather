import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

function App() {
    return (
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
    );
}

export default App;
