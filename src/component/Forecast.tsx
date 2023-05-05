import { useState, useEffect } from "react"
import { ForecastData } from "../interfaces/interfaces"
import { ForecastProps } from "../interfaces/propTypes"

const Forecast = ({coords, forecastLoading, setForecastLoading}: ForecastProps): JSX.Element => {

    const [forecastData, setForecastData] = useState<ForecastData>({} as ForecastData)

    useEffect(() => {
        if (coords.latitude && coords.longitude) {
            fetchForecastData().then((forecastData) => {
                setForecastData(forecastData)
                setForecastLoading(false)
            })
        }
    }, [coords])

    const fetchForecastData = async () => {
        const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${import.meta.env.VITE_API_KEY}`) 
        const data: ForecastData = await response.json()
        return data
    }

    return (
        <div>
            <h1>ForeCast</h1>
        </div>
    )
}

export default Forecast