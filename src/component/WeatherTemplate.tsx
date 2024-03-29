import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Switch from '@mui/material/Switch';
import { WeatherTemplateProps } from "../services/propTypes";
import { toggleFC, convertToWeekDay, changingIconsForecast } from "../services";
import "../styles/weather-template.css"
import "../styles/Weather.css"

const WeatherTemplate = ({data, toggle, setToggle, darkMode, setOpen}: WeatherTemplateProps): JSX.Element => {

    return (
        <div className="weather-box">
            <div style={ darkMode ? {backgroundColor: "#0076BF", color: "black"} : {backgroundColor: "rgba(121, 209, 246, 1)", color: "white"}} className="box2">
              <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: 20, marginTop: 15}}>
                <FontAwesomeIcon icon={faX} size='1x' onClick={() => setOpen(false)}/>
              </div>
              <p className="toggle">°F<Switch checked={toggle} onClick={() => setToggle(!toggle)}/>°C</p>
              <p>{convertToWeekDay(data.maxDate, true)}</p>
              <div className="wrap-it-all">
                <div className="column-a">
                  <div className="temp-div">
                    <p className="temp-text">current temp</p>
                    <p className="temp">{toggleFC(data?.fields?.current, toggle)}</p>
                  </div>
                  <div className="min">  
                    <p>min-temp</p>
                    <p>{toggleFC(data?.lowestMinTemp, toggle)}</p>
                  </div>
                </div>
                <div className="column-b">
                  <FontAwesomeIcon className="sunny-icon" icon={changingIconsForecast(data)} size="10x" />
                  <p className="description">{data.weather ? data.weather.main : ""}</p>
                  <p className="description">{data.weather ? data.weather.description : ""}</p>
                </div>
                <div className="column-c">
                  <div className="feels-like-div">
                    <p className="feels-like-text">feels like</p>
                    <p className="feels-like">{toggleFC(data?.fields?.feels, toggle)}</p>
                  </div>
                  <div className="max">
                    <p>max-temp</p>
                    <p>{toggleFC(data?.biggestMaxTemp, toggle)}</p>
                  </div>
                </div>
            </div>
            <div className='row-a'>
              <p>WIND: {data?.fields?.wind}mph</p>
              <p>PRESSURE: {data?.fields?.pressure}mb</p>
              <p>HUMIDITY: {data?.fields.humidity}%</p>
            </div>
          </div>
        </div>
    )

}

export default WeatherTemplate