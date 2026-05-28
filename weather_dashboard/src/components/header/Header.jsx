import Logo from "./logo";
import Search from "./search";
import FavouriteLocations from "./FavouriteLocations";
import FavouriteLocationsModal from "./favouriteLocationsModal";
export default function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-linear-to-b from-black/60 to-black/0 pb-10">
            <nav
                className="container flex items-center justify-between py-6"
            >
                <Logo />

                <div className="flex items-center gap-4 relative">
                    <Search />
                    <FavouriteLocations />
                    <FavouriteLocationsModal />
                </div>
            </nav>
        </header>
    );
}
