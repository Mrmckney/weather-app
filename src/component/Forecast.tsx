import { useState, useEffect } from "react"
import { ForecastData, ForecastDataSingle } from "../interfaces/interfaces"
import { ForecastProps } from "../interfaces/propTypes"
import SmallForecast from "./SmallForecast"


const Forecast = ({coords, forecastLoading, setForecastLoading, toggle}: ForecastProps): JSX.Element => {

    const [forecastData, setForecastData] = useState<ForecastDataSingle[]>([])
    console.log(forecastData)

    useEffect(() => {
        if (coords.latitude && coords.longitude) {
            fetchForecastData().then((forecastData) => {
                setForecastData([forecastData.list[0], forecastData.list[8], forecastData.list[16], forecastData.list[24], forecastData.list[32]])
                setForecastLoading(false)
            })
        }
    }, [coords])

    const fetchForecastData = async () => {
        const response: Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`) 
        const data: ForecastData = await response.json()
        return data
    }

    return (
        <div>
            <h1>ForeCast</h1>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                {forecastData?.map((data: ForecastDataSingle, i) => 
                    <SmallForecast key={i} data={data} toggle={toggle}/>
                )}
            </div>
        </div>
    )
}

export default Forecast