import {useEffect, useState} from "react";
function Time() {
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
        <div className="text-white text-2xl h-[4%] bg-neutral-800 text-2xl flex w-full justify-between gap-px items-center
         p-5 font-body font-bold">
            <a>{dateState} </a>
            <a>{clockState} </a>
        </div>
    )
}

export default Time;