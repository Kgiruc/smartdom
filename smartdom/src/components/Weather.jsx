import {useEffect, useState} from "react";

const api = {
    key: "45dc2c6b694b701dffb02713df0ba8df",
}

function Weather() {
    const [weather, setWeather] = useState([{}]);


    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Gdansk&units=imperial&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)
                console.log(result)
            })
    })


    return (
        <div className="weather-data">
            <p>{weather.name}</p>
        </div>
    );
}

export default Weather;