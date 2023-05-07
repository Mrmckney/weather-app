import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSun, 
    faCloudBolt,
    faCloud, 
    faCloudRain, 
    faCloudShowersHeavy, 
    faSnowflake, faSmog, 
    faTornado, 
    faCloudMeatball, 
    faVolcano 
} from '@fortawesome/free-solid-svg-icons'
import Switch from '@mui/material/Switch';
import { WeatherData } from "../interfaces/interfaces";
import { WeatherProps } from "../interfaces/propTypes";
import "../styles/Weather.css"



const Weather = ({coords, weatherLoading, setWeatherLoading, toggle, setToggle}: WeatherProps): JSX.Element => {
    const [data, setData] = useState<WeatherData>({} as WeatherData)
    const [liveTime, setLiveTime] = useState<string>('')
    
    useEffect(() => {
        if (coords.latitude && coords.longitude) {
            fetchWeatherData().then((weatherData) => {
                setData(weatherData)
                setWeatherLoading(false)
            });
        }
    }, [coords])
    
    useEffect(() => {
        const interval = setInterval(() => {
            const nowDate = new Date()
            setLiveTime(nowDate.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit', second: '2-digit' }))
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    const changingIcons = () => {
        if (!data.weather) return faSun
        const weatherName = data.weather[0].main
        switch (weatherName) {
            case "Thunderstorm": return faCloudBolt
            case "Drizzle": return faCloudRain
            case "Rain": return faCloudShowersHeavy
            case "Snow": return faSnowflake
            case "Clear": return faSun
            case "Clouds": return faCloud
            case "Ash": return faVolcano
            case "Squall": return faCloudMeatball
            case "Tornado": return faTornado
            default: return faSmog
        }
    }

    const fetchWeatherData = async () => {
        const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`) 
        const data: WeatherData = await response.json()
        return data
    }

    function toggleFC(f: number) {
      if (toggle) {
        return (( f - 32 ) * 5/9)?.toFixed(0) + "°C"
      } else {
        return f?.toFixed(0) + "°F"
      }
    }

    function convertToHours(time: number) {
        const date = new Date(time * 1000)
        return date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' })
    }

    return (
        <div className="weather-container">
            <div className="box1">
                {weatherLoading ? 
                    <div className="loading-box">
                        <h1>Loading...</h1>
                    </div>
                : 
                    <div>
                      <div className="up-elements">
                        <p className="toggle-switch">°F<Switch  onClick={() => setToggle(!toggle)}/>°C</p>
                        <p className="location">{data?.name}</p>
                      </div>
                      <div className="all-elements-up">
                        <div id="icon-description">
                            <FontAwesomeIcon className="sunny-icon" icon={changingIcons()} size="10x" />
                            <p>{data.weather ? data.weather[0].main : ""}</p>
                        </div>
                        <div className="temp-div">
                          <p className="temp-text">current temp</p>
                          <p className="temp">{toggleFC(data?.main?.temp)}</p>
                        </div>
                        <div className="feels-like-div">
                          <p className="feels-like-text">feels like</p>
                          <p className="feels-like">{toggleFC(data?.main?.feels_like)}</p>
                        </div>
                        <div id="wind-pre-hum">
                          <p>WIND: {data?.wind?.speed}mph</p>
                          <p>PRESSURE: {data?.main?.pressure}mb</p>
                          <p>HUMIDITY: {data?.main?.humidity}%</p>
                        </div>
                        </div>
                        <div className="all-elements-down">
                          <p className="description">{data.weather ? data.weather[0].description : ""}</p>
                          <div className="min">  
                          <p>min-temp</p>
                          <p>{toggleFC(data?.main?.temp_min)}</p>
                        </div>
                        <div className="max">
                          <p>max-temp</p>
                          <p>{toggleFC(data?.main?.temp_max)}</p>
                        </div>
                        <div className="hours">
                          <p>live time: {liveTime}</p>
                          <p>sunrise: {convertToHours(data?.sys?.sunrise)}</p>
                          <p>sunset: {convertToHours(data?.sys?.sunset)}</p>
                          </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Weather;