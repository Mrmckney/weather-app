import { SetStateAction, Dispatch } from "react"

export type WeatherProps = {
    coords: GeolocationCoordinates
    weatherLoading: boolean
    setWeatherLoading: Dispatch<SetStateAction<boolean>>
}

export type ForecastProps = {
    coords: GeolocationCoordinates
    forecastLoading: boolean
    setForecastLoading: Dispatch<SetStateAction<boolean>>
}