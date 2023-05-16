import { WeatherData, ForecastData, Coords } from "./interfaces"

export const fetchWeatherData = async (coords: Coords) => {
    const response: Response = await fetch(`http://localhost:5001/api/weather`, {
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
    const response: Response = await fetch(`http://localhost:5001/api/forecast`, {
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
    const response: Response = await fetch(`http://localhost:5001/api/search`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({word: word})
    }) 
    const data = response.json()
    return data
}