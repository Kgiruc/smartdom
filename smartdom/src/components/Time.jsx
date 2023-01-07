import {useEffect, useState} from "react";
function Time() {
    const [clockState, setClockState] = useState();
    const [dateState, setDateState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setClockState(date.toLocaleTimeString())
            setDateState(date.toDateString())
        }, 1000)
    }, [])


    return (
        <div className="text-white h-[3%] bg-gray-600 text-2xl flex w-full justify-between gap-px items-center rounded-tl-2xl rounded-tr-2xl p-5">
            <a>{dateState} </a>
            <a>{clockState} </a>
        </div>
    )
}

export default Time;