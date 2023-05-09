import { SetStateAction, Dispatch } from "react"
import { Coords, ForecastData, ForecastDataSingle, WeatherData } from "./interfaces"

export type WeatherProps = {
    data: WeatherData
    setData: Dispatch<SetStateAction<WeatherData>>
    coords: Coords
    weatherLoading: boolean
    setWeatherLoading: Dispatch<SetStateAction<boolean>>
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
}

export type ForecastProps = {
    data: WeatherData
    forecastData: ForecastDataSingle[]
    setForecastData: Dispatch<SetStateAction<ForecastDataSingle[]>>
    coords: Coords
    forecastLoading: boolean
    setForecastLoading: Dispatch<SetStateAction<boolean>>
    toggle: boolean
}

export type MapProps = {
    coords: Coords
}

export type MusicProps = {
    coords: Coords
}

export type ForecastSingleProps = {
    dataSingle: ForecastDataSingle
    toggle: boolean
    data: WeatherData
}

export type SearchProps = {
    setCoords: Dispatch<SetStateAction<Coords>>
}