import { useState, useEffect } from 'react'
import Weather from './component/Weather'
import './App.css'
import Forecast from './component/Forecast'

function App(): JSX.Element {

  const [coords, setCoords] = useState<GeolocationCoordinates>({} as GeolocationCoordinates)
  const [weatherLoading, setWeatherLoading] = useState<boolean>(false)
  const [forecastLoading, setForecastLoading] = useState<boolean>(false)
  const [toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    setWeatherLoading(true)
    setForecastLoading(true)
    grabLocation()
  }, [])

  const grabLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        setCoords(position.coords)
    });
  }

  return (
    <>
      <h2 className='sub-title'>Welcome To Our</h2>
      <h1 className='title'>Weather App</h1>
      <Weather coords={coords} weatherLoading={weatherLoading} setWeatherLoading={setWeatherLoading} toggle={toggle} setToggle={setToggle} />
      <Forecast coords={coords} forecastLoading={forecastLoading} setForecastLoading={setForecastLoading} toggle={toggle} />
    </>
  
  )
}

export default App
