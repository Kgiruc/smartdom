import NavBar from "./NavBar.jsx";
import Weather from "./Weather.jsx";

function Home() {
    return (
        <section className="w-full bg-neutral-900 h-screen">
            <NavBar/>
            <Weather />
        </section>
    )
}

export default Home
