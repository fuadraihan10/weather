import "./App.css";
import Page from "./Page.jsx"
import {
    FavouriteProvider,
    LocationProvider,
    WeatherProvider,
} from "./provider/index.js";

function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavouriteProvider>
                    <Page />
                </FavouriteProvider>
            </WeatherProvider>
        </LocationProvider>
    );
}

export default App;
