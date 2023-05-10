import { SetStateAction, Dispatch } from "react"
import { Coords, ForecastDataSingle } from "./interfaces"

export type WeatherProps = {
    coords: Coords
    weatherLoading: boolean
    setWeatherLoading: Dispatch<SetStateAction<boolean>>
    toggle: boolean
    setToggle: Dispatch<SetStateAction<boolean>>
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

export type ForecastProps = {
    coords: Coords
    forecastLoading: boolean
    setForecastLoading: Dispatch<SetStateAction<boolean>>
    toggle: boolean
    darkMode: boolean
}


export type MapProps = {
    coords: Coords
}

export type MusicProps = {
    coords: Coords
}

export type ForecastSingleProps = {
    data: ForecastDataSingle
    toggle: boolean
    darkMode: boolean
}

export type SearchProps = {
    setCoords: Dispatch<SetStateAction<Coords>>
}
