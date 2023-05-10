import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import Weather from './component/Weather'
import './App.css'
import Forecast from './component/Forecast'
import SearchBar from './component/SearchBar'
// import Maps from './component/Maps'
import { grabLocation } from './services'
import { Coords, ForecastDataSingle, WeatherData } from './services/interfaces';
import Music from './component/Music';
import { string } from 'yargs';

function App(): JSX.Element {

  const [data, setData] = useState<WeatherData>({} as WeatherData)
  const [forecastData, setForecastData] = useState<ForecastDataSingle[]>([])
  const [coords, setCoords] = useState<Coords>({} as Coords)
  const [weatherLoading, setWeatherLoading] = useState<boolean>(false)
  const [forecastLoading, setForecastLoading] = useState<boolean>(false)
  const [toggle, setToggle] = useState<boolean>(false)
  const [getStarted, setGetStarted] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(false)
  

  useEffect(() => {
    setWeatherLoading(true)
    setForecastLoading(true)
    grabLocation(setCoords)
  }, [])

  useEffect(() => {
    changeMode()
  }, [darkMode])

  function changeMode() {
    let body = document.getElementById("body")
    if(darkMode && body) {
      body.style.backgroundColor = "#055099"
      return 
    } else if(body) {
      body.style.backgroundColor = "#CEEAFA"
    }
  }
  return (
    <>
      { !getStarted ?
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100vh"}}>
          <div style={{display: "flex"}}>
            <FontAwesomeIcon onClick={() => setDarkMode(false)} style={{color: "yellow", fontSize: "150px", marginRight: "400px", marginTop: "0px"}} icon={faCloudSun} />
            <FontAwesomeIcon onClick={() => setDarkMode(true)} style={{color: "darkblue", fontSize: "150px"}} icon={faCloudMoonRain} />
          </div>
          <h2 style={darkMode ? {color: "white"} : {color: "#1A2486"}} className='sub-title'>Welcome To Our</h2>
          <h1 style={darkMode ? {color: "white"} : {color: "#1A2486"}} className='title'>Weather App</h1>
          <Button variant="contained" onClick={() => setGetStarted(true)}>Get Started</Button>
        </div>
        :
        <>
        <SearchBar setCoords={setCoords} />
        <Weather data={data} setData={setData} coords={coords} weatherLoading={weatherLoading} setWeatherLoading={setWeatherLoading} toggle={toggle} setToggle={setToggle} darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Forecast data={data} forecastData={forecastData} setForecastData={setForecastData} coords={coords} forecastLoading={forecastLoading} setForecastLoading={setForecastLoading} toggle={toggle} darkMode={darkMode}/>
        {/* <Music /> */}
        {/* <Maps coords={coords}/> */}
        </>
      }
      
    </>
  
  )
}

export default App
