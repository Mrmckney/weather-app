import { useEffect } from "react"
import { ForecastData } from "../services/interfaces"
import { ForecastProps } from "../services/propTypes"
import { fetchForecastData } from "../services/fetch-api"
import SmallForecast from "./SmallForecast"
import "../styles/Weather.css"
import "../styles/forecast.css"

const Forecast = ({data, forecastData, setForecastData, coords, forecastLoading, setForecastLoading, toggle, setToggle ,darkMode}: ForecastProps): JSX.Element => {

    useEffect(() => {
        if (coords.lat && coords.long) {
            fetchForecastData(coords).then((forecastData) => {       
                setForecastData(forecastData)
                setForecastLoading(false)
            })
        }
    }, [coords])

    return (
        <div className="forecast-container">
            <h1 style={darkMode ? {color: "white"} : {color: "black"}}>ForeCast</h1>
            { forecastLoading ? 
                <div className="loading-box">
                    <h1>Loading...</h1>
                </div>
            :
                <div className="forecast-display" style={{display: "flex", justifyContent: "space-evenly"}}>
                    {forecastData?.map((dataSingle: ForecastData, i) => 
                        <SmallForecast key={i} dataSingle={dataSingle} toggle={toggle} setToggle={setToggle} data={data} darkMode={darkMode}/>
                    )}
                </div>
            }
        </div>
    )
}

export default Forecast