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
import { Coords, ForecastDataSingle, WeatherData } from './interfaces'
import { Dispatch, FormEvent } from 'react';
import { fetchSearchData } from './fetch-api';

export const grabLocation = (setCoords: Dispatch<SetStateAction<Coords>>) => {
    navigator.geolocation.getCurrentPosition(position => {
        setCoords({lat: position.coords.latitude, long: position.coords.longitude})
    });
}

export const handleSearch = (e: FormEvent, word: string, setCoords: Dispatch<SetStateAction<Coords>>) => {
    e.preventDefault()
    if (word.trim() !== '') {
        fetchSearchData(word).then((data) => {
            setCoords({lat: data[0].lat, long: data[0].lon})
        })
    }
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
    const hour = new Date(time * 1000).getHours().toString()
    const minutes = new Date(time * 1000).getMinutes().toString()
    if (hour[0] === "0") {
        return hour[1] + ":" + minutes
    } else {
        return Number(hour) > 12 ? (Number(hour) - 12).toString() + ":" + minutes : hour + ":" + minutes
    }
}

export function convertToWeekDay(time?: string | number) {
    if (time) {
        const date = new Date(time)
        return date.toString().slice(0, 3)
    } else {
        const currentDate = new Date()
        return currentDate.toLocaleDateString('en-us', {weekday: 'long'})
    }
}

export function toggleFC(f: number, toggle: boolean) {
    if (toggle) {
      return (( f - 32 ) * 5/9)?.toFixed(0) + "°C"
    } else {
      return f?.toFixed(0) + "°F"
    }
}

export function toggleFCNumber(f: number, toggle: boolean) {
    if (toggle) {
      return +(( f - 32 ) * 5/9)?.toFixed(0)
    } else {
      return +f?.toFixed(0)
    }
}