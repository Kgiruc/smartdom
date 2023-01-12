import {useEffect, useState} from "react";
import ListRoom from "./ListRoom.jsx";

function Rooms() {
    const [room, setRoom] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/dane")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setRoom(data);
            })
    }, [])

    return (
        <div>
            {room &&
                <ListRoom room={room}/>
            }
        </div>
    );
}

export default Rooms;