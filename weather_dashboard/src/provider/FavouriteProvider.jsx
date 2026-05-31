import {FavouriteContext} from "../context/index.js";
import { useLocalStorage } from "../hooks/index.js";

const FavouriteProvider = ({ children }) => {
    const [favourites, setFavourites] = useLocalStorage("favourites", []);
    const addToFavourite = (latitude, longitude, location) => {
        setFavourites([
            ...favourites,
            { latitude: latitude, longitude: longitude, location: location },
        ]);
    };
    const removeFromFavourites = (location) => {
        const resFavourites = favourites.filter((fav) => {
            return fav.location !== location;
        });
        setFavourites(resFavourites);
    };

    return (
        <FavouriteContext.Provider
            value={{ favourites, addToFavourite, removeFromFavourites }}
        >
            {children}
        </FavouriteContext.Provider>
    );
};

export default FavouriteProvider;
