import { useEffect, useState } from "react";
import { IonIcon, IonItem, IonSpinner } from '@ionic/react'; 
import { sunnyOutline } from 'ionicons/icons';
import { WeatherData } from "../interfaces/interfaces";
import "../styles/Weather.css"
  
const Weather = () => {

    const [coords, setCoords] = useState<GeolocationCoordinates>({} as GeolocationCoordinates)
    const [data, setData] = useState<WeatherData>({} as WeatherData)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        grabLocation()
    }, [])

    useEffect(() => {
        if (coords.latitude && coords.longitude) {
            fetchWeatherData().then((weatherData) => {
                setData(weatherData)
                setLoading(false)
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
        <div className="weather-container" style={{}}>
            <div className="box1">
                {loading ? 
                    <div className="loading-box">
                        <IonItem>
                            <IonSpinner name="circular"></IonSpinner>
                        </IonItem>
                    </div>
                : 
                    <div>
                      <p className="location">{data?.name?.toLocaleUpperCase()}</p>
                      <IonIcon icon={sunnyOutline}></IonIcon>
                    </div>
                }
            </div>
        </div>
    )
}

export default Weather;