import logo from "../../assets/logo.svg";
export default function Logo() {
    return (
        <a href="./">
            {/*logo component------------*/}
            <img className="h-9" src={logo} alt="Weather App" />
        </a>
    );
}
