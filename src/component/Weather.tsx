import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Switch from '@mui/material/Switch';
import { WeatherProps } from "../services/propTypes";
import { changingIcons, convertToHours, toggleFC, convertToWeekDay } from "../services";
import { fetchWeatherData } from "../services/fetch-api";
import "../styles/Weather.css"

const Weather = ({data, setData, coords, weatherLoading, setWeatherLoading, toggle, setToggle, darkMode}: WeatherProps): JSX.Element => {

    const [liveTime, setLiveTime] = useState<string>('')

    useEffect(() => {
      const nowDate = new Date()
      setLiveTime(nowDate.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' }))
    }, [])
    
    useEffect(() => {
        if (coords.lat && coords.long) {
            fetchWeatherData(coords).then((weatherData) => {
                setData(weatherData)
                setWeatherLoading(false)
            });
        }
    }, [coords])
    
    useEffect(() => {
        const interval = setInterval(() => {
            const nowDate = new Date()
            setLiveTime(nowDate.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' }))
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="weather-container">
            <div style={ darkMode ? {backgroundColor: "#0076BF"} : {backgroundColor: "rgba(121, 209, 246, 1)"}} className="box1">
                {weatherLoading ? 
                    <div className="loading-box">
                        <h1>Loading...</h1>
                    </div>
                  : 
                <div style={ darkMode ? {color: "black"} : {color: "white"} }>
                  <p className="toggle-switch">°F<Switch checked={toggle} onClick={() => setToggle(!toggle)}/>°C</p>
                  <p className="location">{data?.name}</p>
                  <p>{convertToWeekDay()}</p>
                  <div className="wrap-it-all">
                    <div className="column1">
                      <FontAwesomeIcon className="sunny-icon" icon={changingIcons(data)} size="10x" />
                      <p className="description">{data.weather ? data.weather[0].main : ""}</p>
                      <p className="description">{data.weather ? data.weather[0].description : ""}</p>
                    </div>
                    <div className="column2">
                      <div className="temp-div">
                        <p className="temp-text">current temp</p>
                        <p className="temp">{toggleFC(data?.main?.temp, toggle)}</p>
                      </div>
                      <div className="min">  
                        <p>min-temp</p>
                        <p>{toggleFC(data?.main?.temp_min, toggle)}</p>
                      </div>
                    </div>
                    <div className="column3">
                      <div className="feels-like-div">
                        <p className="feels-like-text">feels like</p>
                        <p className="feels-like">{toggleFC(data?.main?.feels_like, toggle)}</p>
                      </div>
                      <div className="max">
                        <p>max-temp</p>
                        <p>{toggleFC(data?.main?.temp_max, toggle)}</p>
                      </div>
                    </div>
                    <div className="column4">
                      <div id="wind-pre-hum">
                        <p>WIND: {data?.wind?.speed}mph</p>
                        <p>PRESSURE: {data?.main?.pressure}mb</p>
                        <p>HUMIDITY: {data?.main?.humidity}%</p>
                      </div>
                      <div className="hours">
                        <p className="live-time">live time: {liveTime}</p>
                        <p>sunrise: {convertToHours(data?.sys?.sunrise)} AM</p>
                        <p>sunset: {convertToHours(data?.sys?.sunset)} PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Weather;