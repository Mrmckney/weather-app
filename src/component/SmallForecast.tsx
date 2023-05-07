import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { changingIcons, convertToWeekDay, toggleFC } from '../services'
import { ForecastSingleProps } from "../services/propTypes"

const SmallForecast = ({data, toggle}: ForecastSingleProps): JSX.Element => {

    return (
        <div>
            <h1>{convertToWeekDay(data.dt)}</h1>
            <FontAwesomeIcon icon={changingIcons(data)} size="7x" />
            <p>{data.weather[0].main}</p>
            <span style={{marginRight: 10}}>MIN: {toggleFC(data.main.temp_min, toggle)}</span>
            <span>MAX: {toggleFC(data.main.temp_max, toggle)}</span>
        </div>
    )
}

export default SmallForecast