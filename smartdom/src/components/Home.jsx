import NavBar from "./NavBar.jsx";
import Weather from "./Weather.jsx";
import NameStorage from "./NameStorage.jsx";

function Home() {
    return (
        <section className="w-full bg-neutral-900 h-screen ">
            <NavBar/>
            <Weather />
            <NameStorage />
        </section>
    )
}

export default Home
