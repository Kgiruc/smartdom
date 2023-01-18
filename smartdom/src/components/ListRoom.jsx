import fan from "../assets/fan.png"
import bulb from "../assets/idea.png"

function ListRoom({room}) {

    function editLight() {
        if(room.data.light === true) {
            console.log(room.data);
        }
    }

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 w-[95%]  h-auto md:h-full text-center items-stretch items-end gap-5 m-auto
            md:mt-[22vh] font-rubik bg-neutral-900">
            {room.map((room) => (
                <div
                    className="border-2 border-blue-500 text-white rounded-xl p-5 md:p-0  grid grid-cols-2 relative bg-neutral-800 md:p-8"
                    key={room.data.id}>
                    {room.data.error === 1 ?
                        <p className="absolute left-2 top-1 w-3 h-3 md:w-4 md:h-4 rounded-[50%] bg-red-800 border-[1px] border-black"></p>
                        :
                        <p className="absolute left-2 top-1 w-3 h-3 md:w-4 md:h-4 rounded-[50%] bg-green-400 border-[1px] border-black"></p>
                    }
                    <span className="row-span-2 mt-auto mb-auto text-xl md:text-4xl text-center md:text-left lg:ml-14 sm:ml-1
                    before:content-[''] before:bg-[length:30px_25px] before:w-[30px] before:h-[25px]
                    before:inline-block before:bg-[url('../assets/thermometer.png')] before:invert-[1]">
                        {room.data.temp}°C
                    </span>
                    <p className="row-span-2 mt-auto mb-auto text-xl md:text-4xl text-left before:content-['']
                    before:bg-[length:35px_30px] before:w-[35px] before:h-[30px]
                    before:inline-block before:bg-[url('../assets/humidity.png')] before:invert-[1] before:mr-1">
                        {room.data.air}%
                    </p>
                    {room.data.fan === 1 ?
                        <img src={fan} alt="fan"
                             className="lg:w-20 lg:h-20 w-12 h-12 bg-transparent invert-[1] motion-safe:animate-spin row-span-2
                             absolute right-4 top-2"/>
                        :
                        <img src={fan} alt="fan"
                             className="lg:w-20 lg:h-20 w-12 h-12 bg-transparent  row-span-2 absolute right-4 top-2"/>
                    }
                    {room.data.light === true ?
                        <button  onClick={editLight} className="cursor-pointer"><img src={bulb} alt="fan"
                             className="lg:w-20 lg:h-20 w-12 h-12 bg-transparent invert-[1] animate-pulse"/></button>
                    :
                       <button className="cursor-pointer"> <img src={bulb} alt="fan"
                             className="lg:w-20 lg:h-20 w-12 h-12 bg-transparent "/> </button>
                    }
                    <p className="text-sm md:text-base absolute left-2 bottom-1"> {room.data.name}</p>
                </div>
            ))}
        </div>
    );
}

export default ListRoom;