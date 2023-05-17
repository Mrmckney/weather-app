import { WeatherData, ForecastData, Coords } from "./interfaces"

export const fetchWeatherData = async (coords: Coords) => {
    const response: Response = await fetch(`https://weather-app-api-orcin.vercel.app/api/weather`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(coords)
    }) 
    const data: WeatherData = await response.json()
    return data
}

export const fetchForecastData = async (coords: Coords) => {
    const response: Response = await fetch(`https://weather-app-api-orcin.vercel.app/api/forecast`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(coords)
    }) 
    const data: ForecastData = await response.json()
    return data
}

export const fetchSearchData = async (word: string) => {
    const response: Response = await fetch(`https://weather-app-api-orcin.vercel.app/api/search`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({word: word})
    }) 
    const data = response.json()
    return data
}