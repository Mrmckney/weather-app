import { SetStateAction, Dispatch } from "react"
import { Coords, ForecastDataSingle, WeatherData, ForecastData } from "./interfaces"

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
    forecastData: ForecastData[]
    setForecastData: Dispatch<SetStateAction<ForecastData[]>>
    coords: Coords
    forecastLoading: boolean
    setForecastLoading: Dispatch<SetStateAction<boolean>>
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
    darkMode: boolean
}

export type ForecastSingleProps = {
    dataSingle: ForecastData
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
    data: ForecastData
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
    darkMode: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}
