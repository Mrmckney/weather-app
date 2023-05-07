import { SetStateAction, Dispatch } from "react"
import { ForecastDataSingle } from "./interfaces"

export type WeatherProps = {
    coords: GeolocationCoordinates
    weatherLoading: boolean
    setWeatherLoading: Dispatch<SetStateAction<boolean>>
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
}

export type ForecastProps = {
    coords: GeolocationCoordinates
    forecastLoading: boolean
    setForecastLoading: Dispatch<SetStateAction<boolean>>
    toggle: boolean
}

export type ForecastSingleProps = {
    data: ForecastDataSingle
    toggle: boolean
}