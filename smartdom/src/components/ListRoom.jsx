import fan from "../assets/fan.png"

function ListRoom({room}) {
    return (
        <div
            className="grid grid-cols-2 w-[95%] h-full text-center items-stretch items-end gap-5 m-auto mt-[22vh] font-rubik  ">
            {room.map((room) => (
                <div
                    className="border-2 border-blue-500 text-white rounded-xl p-8 grid grid-cols-2 relative bg-neutral-800"
                    key={room.id}>
                    {room.error === 1 ?
                        <p className="absolute left-2 top-1 w-4 h-4 rounded-[50%] bg-red-800 border-1 border-black"></p>
                        :
                        <p className="absolute left-2 top-1 w-4 h-4 rounded-[50%] bg-green-400 border-[1px] border-black"></p>
                    }
                    <span className="row-span-2 mt-auto mb-auto text-4xl text-left ml-14
                    before:content-[''] before:bg-[length:30px_25px] before:w-[30px] before:h-[25px]
                    before:inline-block before:bg-[url('../assets/thermometer.png')] before:invert-[1]">
                        {room.temp}°C
                    </span>
                    <p className="row-span-2 mt-auto mb-auto text-4xl text-left before:content-['']
                    before:bg-[length:35px_30px] before:w-[35px] before:h-[30px]
                    before:inline-block before:bg-[url('../assets/humidity.png')] before:invert-[1] before:mr-1">
                        {room.air}%
                    </p>
                    {room.fan === 1 ?
                        <img src={fan} alt="fan"
                             className="w-20 h-20 bg-transparent invert-[1] motion-safe:animate-spin row-span-2 absolute right-4 top-2"/>
                        :
                        <img src={fan} alt="fan"
                             className="w-20 h-20 bg-transparent  row-span-2 absolute right-4 top-2"/>
                    }
                    <p className="absolute left-2 bottom-1"> {room.name}</p>
                </div>
            ))}
        </div>
    );
}

export default ListRoom;