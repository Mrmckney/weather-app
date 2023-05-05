import { useEffect, useState } from "react";
import Switch from '@mui/material/Switch';
import { WeatherData } from "../interfaces/interfaces";
import { WeatherProps } from "../interfaces/propTypes";
import "../styles/Weather.css"
  
const Weather = ({coords, weatherLoading, setWeatherLoading}: WeatherProps): JSX.Element => {

    const [data, setData] = useState<WeatherData>({} as WeatherData)
    const [toggle, setToggle] = useState<boolean>(false)
    
    useEffect(() => {
        if (coords.latitude && coords.longitude) {
            fetchWeatherData().then((weatherData) => {
                setData(weatherData)
                setWeatherLoading(false)
            });
        }
    }, [coords])

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

    function convertToHours(time?: number) {
        if (time) {
            const date = new Date(time * 1000)
            return date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' })
        } else {
            const date = new Date()
            return date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' })
        }

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
                      <Switch  onClick={() => setToggle(!toggle)}/>
                      <p className="location">{data?.name}</p>
                      <div className="all-elements-up">
                        <div id="icon-description">
                          <p>sunny</p>
                        </div>
                        <div>
                          <p className="temp-text">current temp</p>
                          <p className="temp">{toggleFC(data?.main?.temp)}</p>
                        </div>
                        <div>
                          <p className="feels-like-text">feels like</p>
                          <p className="feels-like">{toggleFC(data?.main?.feels_like)}</p>
                        </div>
                        <div className="wind-pre-hum">
                          <p>WIND: {data?.wind?.speed}mph</p>
                          <p>PRESSURE: {data?.main?.pressure}mb</p>
                          <p>HUMIDITY: {data?.main?.humidity}%</p>
                        </div>
                        </div>
                        <div className="all-elements-down">
                          <p className="description">{data.weather ? data.weather[0].description : ""}</p>
                        <div className="max">
                          <p>max-temp</p>
                          <p>{toggleFC(data?.main?.temp_max)}</p>
                        </div>
                        <div className="min">  
                          <p>min-temp</p>
                          <p>{toggleFC(data?.main?.temp_min)}</p>
                        </div>
                        <div className="rise">
                          <p>sunrise</p>
                          <p>{convertToHours(data?.sys?.sunrise)}</p>
                        </div>
                        <div className="set">
                          <p>sunset</p>
                          <p>{convertToHours(data?.sys?.sunset)}</p>
                        </div>
                        <div>
                          <p>live time</p>
                          <p>{convertToHours()}</p>
                        </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Weather;