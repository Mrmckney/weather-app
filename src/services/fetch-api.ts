import { WeatherData, ForecastData, Coords } from "./interfaces"

export const fetchWeatherData = async (coords: Coords) => {
    const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`) 
    const data: WeatherData = await response.json()
    return data
}

export const fetchForecastData = async (coords: Coords) => {
    const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.long}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`) 
    const data: ForecastData = await response.json()
    return data
}

export const fetchSearchData = async (word: string) => {
    const response: Response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${word}&limit=1&appid=${import.meta.env.VITE_API_KEY}`) 
    const data = response.json()
    return data
}


