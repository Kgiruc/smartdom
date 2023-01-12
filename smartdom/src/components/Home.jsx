import NavBar from "./NavBar.jsx";
import Weather from "./Weather.jsx";
import NameStorage from "./NameStorage.jsx";
import Rooms from "./Rooms.jsx";

function Home() {
    return (
        <section className="w-full bg-neutral-900 h-screen ">
            <NavBar/>
            <Weather />
            <NameStorage />
            <Rooms />
        </section>
    )
}

export default Home
