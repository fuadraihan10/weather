import { useContext, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context/index.js";
import { getLocationByName } from "../../data.js";
export default function Search() {
    const [search, setSearch] = useState("");
    const {setSelectedLocation} = useContext(LocationContext)
    function handleSubmit(e) {
        e.preventDefault();
        const fetchedLocation = getLocationByName(search)
        setSelectedLocation(fetchedLocation)
    }
    return (
            <form action="#" onSubmit={handleSubmit}>
                <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                    {/* main search input------------*/}
                    <input
                        className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                        type="search"
                        placeholder="Search Location"
                        required
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* search button -------------*/}
                    <button type="submit">
                        <img src={searchIcon} alt="Search" />
                    </button>
                </div>
            </form>
    );
}
