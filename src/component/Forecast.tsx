import { useState, useEffect } from "react"
import { ForecastDataSingle } from "../services/interfaces"
import { ForecastProps } from "../services/propTypes"
import { fetchForecastData } from "../services/fetch-api"
import SmallForecast from "./SmallForecast"


const Forecast = ({coords, forecastLoading, setForecastLoading, toggle}: ForecastProps): JSX.Element => {

    const [forecastData, setForecastData] = useState<ForecastDataSingle[]>([])

    useEffect(() => {
        if (coords.latitude && coords.longitude) {
            fetchForecastData(coords).then((forecastData) => {
                setForecastData([forecastData.list[0], forecastData.list[8], forecastData.list[16], forecastData.list[24], forecastData.list[32]])
                setForecastLoading(false)
            })
        }
    }, [coords])

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