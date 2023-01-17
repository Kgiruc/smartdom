import {useEffect, useState} from "react";
function NavBar() {
    const [clockState, setClockState] = useState();
    const [dateState, setDateState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setClockState(date.toLocaleTimeString("pl-PL"))
            setDateState(date.toLocaleDateString("pl-PL"))
        }, 1000)
    }, [])


    return (
        <nav className="text-white text-md md:text-xl h-[4%] bg-neutral-800 flex w-full justify-between gap-px items-center
         p-7 font-nunito font-bold">
            <a>{dateState} </a>
            <a className="text-blue-500 text-xl md:text-3xl">SmartDom</a>
            <a>{clockState} </a>
        </nav>
    )
}

export default NavBar;