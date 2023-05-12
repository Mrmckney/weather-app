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
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

export type ForecastProps = {
    data: WeatherData
    forecastData: ForecastDataSingle[]
    setForecastData: Dispatch<SetStateAction<ForecastDataSingle[]>>
    coords: Coords
    forecastLoading: boolean
    setForecastLoading: Dispatch<SetStateAction<boolean>>
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
    darkMode: boolean
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
    darkMode: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
    data: WeatherData
}

export type SearchProps = {
    setCoords: Dispatch<SetStateAction<Coords>>
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

export type WeatherTemplateProps = {
    data: ForecastDataSingle
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
    darkMode: boolean
}
