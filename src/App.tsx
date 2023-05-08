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
import { Coords } from './services/interfaces';
import Music from './component/Music';

function App(): JSX.Element {

  const [coords, setCoords] = useState<Coords>({} as Coords)
  const [weatherLoading, setWeatherLoading] = useState<boolean>(false)
  const [forecastLoading, setForecastLoading] = useState<boolean>(false)
  const [toggle, setToggle] = useState<boolean>(false)
  const [getStarted, setGetStarted] = useState<boolean>(false)

  useEffect(() => {
    setWeatherLoading(true)
    setForecastLoading(true)
    grabLocation(setCoords)
  }, [])

  return (
    <>
      { !getStarted ?
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100vh"}}>
          <div style={{display: "flex"}}>
            <FontAwesomeIcon style={{color: "yellow", fontSize: "150px", marginRight: "400px", marginTop: "0px"}} icon={faCloudSun} />
            <FontAwesomeIcon style={{color: "darkblue", fontSize: "150px"}} icon={faCloudMoonRain} />
          </div>
          <h2 className='sub-title'>Welcome To Our</h2>
          <h1 className='title'>Weather App</h1>
          <Button variant="contained" onClick={() => setGetStarted(true)}>Get Started</Button>
        </div>
        :
        <>
        <SearchBar setCoords={setCoords} />
        <Weather coords={coords} weatherLoading={weatherLoading} setWeatherLoading={setWeatherLoading} toggle={toggle} setToggle={setToggle} />
        <Forecast coords={coords} forecastLoading={forecastLoading} setForecastLoading={setForecastLoading} toggle={toggle} />
        <Music />
        {/* <Maps coords={coords}/> */}
        </>
      }
      
    </>
  
  )
}

export default App
