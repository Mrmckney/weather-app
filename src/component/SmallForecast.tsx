import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { ForecastSingleProps } from "../interfaces/propTypes"

const SmallForecast = ({data, toggle}: ForecastSingleProps): JSX.Element => {

    const changingIcons = () => {
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

    function convertToWeekDay(time: number) {
        const date = new Date(time * 1000)
        return date.toString().slice(0, 3)
    }

    function toggleFC(f: number) {
        if (toggle) {
          return (( f - 32 ) * 5/9)?.toFixed(0) + "°C"
        } else {
          return f?.toFixed(0) + "°F"
        }
      }

    return (
        <div>
            <h1>{convertToWeekDay(data.dt)}</h1>
            <FontAwesomeIcon icon={changingIcons()} size="7x" />
            <p>{data.weather[0].main}</p>
            <span style={{marginRight: 10}}>MIN: {toggleFC(data.main.temp_min)}</span>
            <span>MAX: {toggleFC(data.main.temp_max)}</span>
        </div>
    )
}

export default SmallForecast