import { WeatherData, ForecastData } from "./interfaces"

export const fetchWeatherData = async (coords: GeolocationCoordinates) => {
    const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`) 
    const data: WeatherData = await response.json()
    return data
}

export const fetchForecastData = async (coords: GeolocationCoordinates) => {
    const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`) 
    const data: ForecastData = await response.json()
    return data
}

export const fetchMapsData = async (coords: GeolocationCoordinates) => {
    const response: Response = await fetch(`https://tile.openweathermap.org/map/clouds_new/10/10/10.png?appid=${import.meta.env.VITE_API_KEY}`) 
    const data = response.json()
    console.log(data)
    return data
}


