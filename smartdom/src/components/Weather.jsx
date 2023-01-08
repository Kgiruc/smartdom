import {useEffect, useState} from "react";
const api = {
    key: "45dc2c6b694b701dffb02713df0ba8df",
    base: "https://api.openweathermap.org/data/2.5/"
}
function Weather() {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        setInterval(() => {
            fetch(`${api.base}forecast?q=Gdansk&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    console.log(result.list[0].main.temp)
                })
        },5000)
    },[])

    return (
        <div>

        </div>
    );
}

export default Weather;