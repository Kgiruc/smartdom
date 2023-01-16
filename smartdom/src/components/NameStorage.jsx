import {useEffect, useState} from "react";

const nameLocalStorage = JSON.parse(localStorage.getItem("name"))
function NameStorage() {
    const [name, setName] = useState(nameLocalStorage);

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name))
    }, [name])

    return (
        <div className="w-1/2 md:w-auto">
            {
                nameLocalStorage ?
                    (
                        <div className="flex md:justify-center md:items-center m-10 w-auto mt-20 md:m-[100px] text-xl md:text-5xl text-white
                        font-rubik">
                            <p>Witaj, {name} </p>
                        </div>
                    ) : (
                        <div className="p-5">
                            <form className="p-10 flex-col justify-center items-center text-center">
                                <label className="text-white text-3xl text-center font-nunito">
                                    Twoje imię:
                                    <input
                                        className="bg-transparent border-b-2 border-blue-500 w-1/2 text-center text-2xl
                                        focus:outline-none focus:border-b-4  focus:border-blue-600 mt-2"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <input
                                    className="mt-5 text-white font-rubik font-bold border-2  pl-3 pr-3 pt-1 pb-1 rounded-2xl border-blue-500
                                    hover:border-white hover:text-blue-500 hover:bg-white"
                                    type="submit"
                                />
                            </form>
                        </div>
                    )
            }
        </div>
    )
}

export default NameStorage;