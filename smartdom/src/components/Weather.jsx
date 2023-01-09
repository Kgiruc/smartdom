import {useEffect, useState} from "react";

const api = {
    key: "45dc2c6b694b701dffb02713df0ba8df",
}

function Weather() {
    const [weather, setWeather] = useState([{}]);


    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=strzałkowo&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)
            })
    }, [])


    return (
        <div className="weather-data">
            {
                weather.main ? (
                    <div className="weather-data">
                        <p>{weather.name}</p>
                        <img className="weather-image"
                             src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                             alt="weather_icon"/>
                        <p className="temp">{Math.round(weather.main.temp)}°C</p>
                        <p>{weather.weather[0].main}</p>
                    </div>
                ) : (
                    <div>
                        <p className="inscription">chuj w dupe</p>
                    </div>
                )}

            {weather.cod === "404" && (
                <p>Error</p>
            )}
        </div>
    );
}

export default Weather;