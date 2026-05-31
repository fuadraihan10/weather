import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../context/index.js";
export default function FavouriteLocationsModal() {
    const Favourites = useContext(FavouriteContext);
    const { setSelectedLocation } = useContext(LocationContext);
    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            {/* Modal title--------------------- */}
            <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
            {/* List of favourite locations--------------- */}
            <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                {Favourites.favourites.length > 0 ? (
                    Favourites.favourites.map((fav) => {
                        return (
                            <li
                                key={fav.location}
                                className="hover:bg-gray-200"
                                onClick={() => setSelectedLocation({ ...fav })}
                            >
                                {fav.location}
                            </li>
                        );
                    })
                ) : (
                    <p>Nothing is favourite</p>
                )}
            </ul>
        </div>
    );
}
