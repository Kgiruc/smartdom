import {useEffect, useState} from "react";
import ListRoom from "./ListRoom.jsx";
import gif_loading from "../assets/gif/loading.gif";
import {getDocs, doc, updateDoc} from "firebase/firestore";
import {roomCollectionRef} from "../../data/firestore.collection.js";


function Rooms() {
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [light, setLight] = useState(true);

    useEffect(() => {
        getData();
    }, [])


    function getRoomIdHandler(id) {
        const docRef = doc(roomCollectionRef, id);
        setLight((value) => !value)
            const payload = {
                light: light
            }

        updateDoc(docRef, payload);
        setInterval(getData,1)
    }

    function getData() {
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
                        <ListRoom room={room} getRoomId={getRoomIdHandler}  />
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