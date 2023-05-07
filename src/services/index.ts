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
import { SetStateAction } from 'react';
import { ForecastDataSingle, WeatherData } from './interfaces'
import { Dispatch } from 'react';

export const grabLocation = (setCoords: Dispatch<SetStateAction<GeolocationCoordinates>>) => {
    navigator.geolocation.getCurrentPosition(position => {
        setCoords(position.coords)
    });
}

export const changingIcons = (data: WeatherData | ForecastDataSingle) => {
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

export function convertToHours(time: number) {
    const date = new Date(time * 1000)
    return date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' })
}

export function convertToWeekDay(time: number) {
    const date = new Date(time * 1000)
    return date.toString().slice(0, 3)
}

export function toggleFC(f: number, toggle: boolean) {
    if (toggle) {
      return (( f - 32 ) * 5/9)?.toFixed(0) + "°C"
    } else {
      return f?.toFixed(0) + "°F"
    }
  }