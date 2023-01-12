import fan from "../assets/fan.png"

function ListRoom({room}) {
    return (
        <div className="grid grid-cols-2 w-[95%] h-auto text-center items-center items-end gap-5 ml-auto mr-auto font-rubik  ">
            {room.map((room) => (
                <div className="border-2 text-white rounded-xl p-6 grid grid-cols-2 relative bg-neutral-800" key={room.id}>
                    {room.error === 1 ?
                        <p className="absolute left-2 top-1 w-4 h-4 rounded-[50%] bg-red-800"></p>
                        :
                        <p className="absolute left-2 top-1 w-4 h-4 rounded-[50%] bg-green-400"></p>
                    }
                    <span className="row-span-2 mt-auto mb-auto text-4xl text-left ml-14
                    after:content-[url('../assets/thermometer.png')] after:bg-[length:20px_10px] after:w-2 after:1 after:inline-block">
                        {room.temp}°C
                    </span>
                    <p> {room.air}%</p>
                    {room.fan === 1 ?
                        <img src={fan} alt="fan"  className="w-20 h-20 bg-transparent invert-[1] hue-rotate-180 motion-safe:animate-spin row-span-2 absolute right-4 top-2" />
                        :
                        <img src={fan} alt="fan"  className="w-20 h-20 bg-transparent  row-span-2 absolute right-2 top-2" />
                    }
                    <p> {room.name}</p>
                </div>
            ))}
        </div>
    );
}

export default ListRoom;