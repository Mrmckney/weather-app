import { useEffect, useState } from "react";
import { IonIcon, IonItem, IonSpinner } from '@ionic/react'; 
import { sunnyOutline } from 'ionicons/icons';
import { WeatherData } from "../interfaces/interfaces";
import { WeatherProps } from "../interfaces/propTypes";
import "../styles/Weather.css"
  
const Weather = ({coords, weatherLoading, setWeatherLoading}: WeatherProps): JSX.Element => {

    const [data, setData] = useState<WeatherData>({} as WeatherData)
    
    useEffect(() => {
        if (coords.latitude && coords.longitude) {
            fetchWeatherData().then((weatherData) => {
                setData(weatherData)
                setWeatherLoading(false)
            });
        }
    }, [coords])

    const fetchWeatherData = async () => {
        const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${import.meta.env.VITE_API_KEY}`) 
        const data: WeatherData = await response.json()
        return data
    }

    return (
        <div className="weather-container">
            <div className="box1">
                {weatherLoading ? 
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