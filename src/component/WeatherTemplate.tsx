import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Switch from '@mui/material/Switch';
import { WeatherTemplateProps } from "../services/propTypes";
import { changingIcons, toggleFC, convertToWeekDay } from "../services";
import "../styles/Weather.css"




const WeatherTemplate = ({data, toggle, setToggle, darkMode}: WeatherTemplateProps): JSX.Element => {

    return (
        <div className="weather-container">
            <div style={ darkMode ? {backgroundColor: "#0076BF"} : {backgroundColor: "rgba(121, 209, 246, 1)"}} className="box1">
                <div>
                  <p className="toggle-switch">°F<Switch checked={toggle} onClick={() => setToggle(!toggle)}/>°C</p>
                  <p>{convertToWeekDay()}</p>
                  <div className="wrap-it-all">
                    <div className="column1">
                      <FontAwesomeIcon className="sunny-icon" icon={changingIcons(data)} size="10x" />
                      <p className="description">{data.weather ? data.weather[0].main : ""}</p>
                      <p className="description">{data.weather ? data.weather[0].description : ""}</p>
                    </div>
                    <div className="column2">
                      <div className="temp-div">
                        <p className="temp-text">current temp</p>
                        <p className="temp">{toggleFC(data?.main?.temp, toggle)}</p>
                      </div>
                      <div className="min">  
                        <p>min-temp</p>
                        <p>{toggleFC(data?.main?.temp_min, toggle)}</p>
                      </div>
                    </div>
                    <div className="column3">
                      <div className="feels-like-div">
                        <p className="feels-like-text">feels like</p>
                        <p className="feels-like">{toggleFC(data?.main?.feels_like, toggle)}</p>
                      </div>
                      <div className="max">
                        <p>max-temp</p>
                        <p>{toggleFC(data?.main?.temp_max, toggle)}</p>
                      </div>
                    </div>
                    <div className="column4">
                      <div id="wind-pre-hum">
                        <p>WIND: {data?.wind?.speed}mph</p>
                        <p>PRESSURE: {data?.main?.pressure}mb</p>
                        <p>HUMIDITY: {data?.main?.humidity}%</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )

}

export default WeatherTemplate