import {useEffect, useState} from "react";
import ListRoom from "./ListRoom.jsx";
import {db} from "../../data/firebase-init.js";
import gif_loading from "../assets/gif/loading.gif";
import {collection, getDocs} from "firebase/firestore";


function Rooms() {
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        const roomCollectionRef = collection(db, 'dane')
        getDocs(roomCollectionRef)
            .then(res => {
                const dataRoom = res.docs.map(doc =>
                    ({data: doc.data(),
                        id: doc.id,
                    }))
                setRoom(dataRoom)
                setLoading(false)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <>
            {
                room ? (
                    <div className="bg-neutral-900 pb-3">
                        <ListRoom room={room}/>
                        {/*{<p>{room[0].data.temp}</p>}*/}
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