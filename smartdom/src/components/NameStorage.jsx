import {useEffect, useState} from "react";

const nameLocalStorage = JSON.parse(localStorage.getItem("name"))

function NameStorage() {
    const [name, setName] = useState(nameLocalStorage);
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name))
    }, [name])

    return (
        <div>
        {
            name ? (<div>
                    <p>Witaj {name} </p>
                </div>):(
                    <div>
                        <form onSubmit={handleSubmit}>
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