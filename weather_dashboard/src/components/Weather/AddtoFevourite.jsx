import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context/index.js";

export default function AddtoFevourite() {
    const { favourites, addToFavourite, removeFromFavourites } =
        useContext(FavouriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        const found = favourites.find((fav) => fav.location === location);
        setIsFavourite(found)
    }, []);

    ;

    function handleFavourite() {
        
        const found = favourites.find((fav) => fav.location === location);
        if (!found) {
            addToFavourite(latitude, longitude, location);
        } else {
            removeFromFavourites(location);
        }
        setIsFavourite(!isFavourite);
    }

    return (
        <button className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    className="text-sm border md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md"
                    onClick={handleFavourite}
                >
                    <span>Add to Favourite</span>
                    <img
                        src={isFavourite ? RedHeartIcon : HeartIcon}
                        alt="heart"
                    />
                </button>
            </div>
        </button>
    );
}
