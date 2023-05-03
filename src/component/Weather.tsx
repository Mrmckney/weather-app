import { useEffect, useState } from "react";
import { WeatherData } from "../interfaces/interfaces";

const tempData: WeatherData[] = [{
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
  }]
  
const Weather = () => {

    const [coords, setCoords] = useState<GeolocationCoordinates>({} as GeolocationCoordinates)
    const [data, setData] = useState<WeatherData>({} as WeatherData)

    useEffect(() => {
        grabLocation()
    }, [])

    useEffect(() => {
        if (coords.latitude && coords.longitude) {
            fetchWeatherData().then((weatherData) => {
                setData(weatherData)
            });
        }
    }, [coords])

    const grabLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            setCoords(position.coords)
        });
    }

    const fetchWeatherData = async () => {
        const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${import.meta.env.VITE_API_KEY}`) 
        const data: WeatherData = await response.json()
        return data
    }

    return (
        <div className="weather-container">
            <h1>Today's Forecast</h1>
            <div>
                {tempData.map((item, i) => (
                    <h1 key={i}>{item.base}</h1>
                ))}
            </div>
        </div>
    )
}

export default Weather;