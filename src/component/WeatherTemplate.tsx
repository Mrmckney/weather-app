import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Switch from '@mui/material/Switch';
import { WeatherTemplateProps } from "../services/propTypes";
import { changingIcons, toggleFC, convertToWeekDay } from "../services";
import "../styles/WeatherTemplate.css"
import "../styles/Weather.css"




const WeatherTemplate = ({data, toggle, setToggle, darkMode}: WeatherTemplateProps): JSX.Element => {

    return (
        <div className="weather-box">
            <div style={ darkMode ? {backgroundColor: "#0076BF", color: "black"} : {backgroundColor: "rgba(121, 209, 246, 1)", color: "white"}} className="box1">
              <p className="toggle">°F<Switch checked={toggle} onClick={() => setToggle(!toggle)}/>°C</p>
              <p>{convertToWeekDay()}</p>
              <div className="wrap-it-all">
                <div className="column-a">
                  <div className="temp-div">
                    <p className="temp-text">current temp</p>
                    <p className="temp">{toggleFC(data?.main?.temp, toggle)}</p>
                  </div>
                  <div className="min">  
                    <p>min-temp</p>
                    <p>{toggleFC(data?.main?.temp_min, toggle)}</p>
                  </div>
                </div>
                <div className="column-b">
                  <FontAwesomeIcon className="sunny-icon" icon={changingIcons(data)} size="10x" />
                  <p className="description">{data.weather ? data.weather[0].main : ""}</p>
                  <p className="description">{data.weather ? data.weather[0].description : ""}</p>
                </div>
                <div className="column-c">
                  <div className="feels-like-div">
                    <p className="feels-like-text">feels like</p>
                    <p className="feels-like">{toggleFC(data?.main?.feels_like, toggle)}</p>
                  </div>
                  <div className="max">
                    <p>max-temp</p>
                    <p>{toggleFC(data?.main?.temp_max, toggle)}</p>
                  </div>
                </div>
            </div>
            <div className='row-a'>
              <p>WIND: {data?.wind?.speed}mph</p>
              <p>PRESSURE: {data?.main?.pressure}mb</p>
              <p>HUMIDITY: {data?.main?.humidity}%</p>
            </div>
          </div>
        </div>
    )

}

export default WeatherTemplate