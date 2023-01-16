import {useEffect, useState} from "react";
import ListRoom from "./ListRoom.jsx";
import gif_loading from "../assets/gif/loading.gif";

function Rooms() {
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dbmicro-84106-default-rtdb.firebaseio.com/")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setRoom(data);
                setLoading(false)

            })
            .catch(e => console.log(e))
    }, [])


    return (
        <>
        {
            room ? (
                <div className="bg-neutral-900 pb-3">
                        <ListRoom room={room}/>
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-center w-20 h-20">
                    {loading && <img src={gif_loading} className="w-1/2 h-1/2" alt="loading"/>}
                </div>
            )
        }
        </>
    );
}

export default Rooms;