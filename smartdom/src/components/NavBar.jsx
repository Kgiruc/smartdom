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
        <div className="text-white text-xl h-[4%] bg-neutral-800 text-2xl flex w-full justify-between gap-px items-center
         p-7 font-body font-bold">
            <a>{dateState} </a>
            <a className="text-blue-500 text-3xl">SmartDom</a>
            <a>{clockState} </a>
        </div>
    )
}

export default NavBar;