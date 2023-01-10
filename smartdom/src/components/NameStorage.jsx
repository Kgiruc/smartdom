import {useEffect, useState} from "react";

const nameLocalStorage = JSON.parse(localStorage.getItem("name"))

function NameStorage() {
    const [name, setName] = useState(nameLocalStorage);
    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name))
    }, [name])


    return (
        <div>
        {
            nameLocalStorage ? (<div>
                    <p>Witaj {name} </p>
                </div>):(
                    <div>
                        <form>
                            <label>
                                Twoje imię:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <input type="submit"/>
                        </form>
                    </div>)


}
        </div>
)
}

export default NameStorage;