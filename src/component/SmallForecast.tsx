import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { changingIcons, convertToWeekDay, toggleFC } from '../services'
import { ForecastSingleProps } from "../services/propTypes"

const SmallForecast = ({dataSingle, toggle, data}: ForecastSingleProps): JSX.Element => {

    const [difference, setDifference] = useState<{maxDif: string, minDif: string}>({maxDif: "", minDif: ""})

    useEffect(() => {
        const findDifference = () => {
            let minDifference: string = (dataSingle.main.temp_min - data.main.temp_min).toFixed(0)
            let maxDifference: string = (dataSingle.main.temp_max - data.main.temp_max).toFixed(0)
            if (minDifference === "0" || minDifference === "-0") {
                minDifference = ""
            } else if (+minDifference > 0) {
                minDifference = "+" + minDifference
            } else {
                minDifference = minDifference
            }
            if (maxDifference === "0" || maxDifference === "-0") {
                maxDifference = ""
            } else if (+maxDifference > 0) {
                maxDifference = "+" + maxDifference
            } else {
                maxDifference = maxDifference
            }
            setDifference({...difference, maxDif: maxDifference, minDif: minDifference})
        }
        findDifference()
    }, [])

    return (
        <div>
            <h1>{convertToWeekDay(dataSingle.dt_txt)}</h1>
            <FontAwesomeIcon icon={changingIcons(dataSingle)} size="7x" />
            <p>{dataSingle.weather[0].main}</p>
            <span style={{marginRight: 5}}>MIN: {toggleFC(dataSingle.main.temp_min, toggle)}</span>
            <span style={+difference.minDif > 0 ? {color: "green", marginRight: 10} : {color: "red", marginRight: 10}}>{difference.minDif}</span>
            <span style={{marginRight: 5}}>MAX: {toggleFC(dataSingle.main.temp_max, toggle)}</span>
            <span style={+difference.maxDif > 0 ? {color: "green", marginRight: 10} : {color: "red", marginRight: 10}}>{difference.maxDif}</span>
        </div>
    )
}

export default SmallForecast