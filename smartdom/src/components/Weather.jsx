import {useEffect, useState} from "react";

function Weather() {
    const [weather, setWeather] = useState([{}]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=strzałkowo&lang=pl&units=metric&APPID=${import.meta.env.VITE_KEY}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setLoading(false);
            })
            .catch(e =>{
                console.log(e);
            })
    }, [])


    return (
        <div className="text-white text-3xl font-rubik float-right p-10 w-1/2">

            {
                weather.main ? (
                    <div className="grid grid-rows-2 grid-cols-2 gap-3 text-center justify-center items-center border-2 border-blue-500 p-5 rounded-2xl">
                        <p className="text">{Math.round(weather.main.temp)}°C</p>
                        <img className="ml-auto mr-auto items-stretch row-span-2 w-1/2"
                             src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                             alt="weather_icon"/>
                        <p className="text-lg">{weather.weather[0].description}</p>
                    </div>
                ) : (
                    <div className="">
                        {loading && <p className="">Loading...</p>}
                    </div>
                )}
        </div>
    );
}

export default Weather;