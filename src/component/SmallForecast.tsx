import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { changingIconsForecast, convertToWeekDay, toggleFC, toggleFCNumber } from '../services'
import { ForecastSingleProps } from "../services/propTypes"
import WeatherTemplate from './WeatherTemplate';
import '../styles/weather-template.css'

const SmallForecast = ({dataSingle, toggle, setToggle , data, darkMode}: ForecastSingleProps): JSX.Element => {

    const [difference, setDifference] = useState<{maxDif: string, minDif: string}>({maxDif: "", minDif: ""})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const findDifference = () => {
            let minDifference: string = (toggleFCNumber(dataSingle.lowestMinTemp, toggle) - toggleFCNumber(data.main.temp_min, toggle)).toFixed(0)
            let maxDifference: string = (toggleFCNumber(dataSingle.biggestMaxTemp, toggle) - toggleFCNumber(data.main.temp_max, toggle)).toFixed(0)
            if (minDifference === "0" || minDifference === "-0") {
                minDifference = ""
            } else if (+minDifference > 0) {
                minDifference = "ꜛ" + minDifference
            } else {
                const extractMinusMin = minDifference.split("")
                minDifference = "ꜜ" + extractMinusMin[1]
            }
            if (maxDifference === "0" || maxDifference === "-0") {
                maxDifference = ""
            } else if (+maxDifference > 0) {
                maxDifference = "ꜛ" + maxDifference
            } else {
                const extractMinusMax = maxDifference.split("")
                maxDifference = "ꜜ" + extractMinusMax[1]
            }
            setDifference({...difference, maxDif: maxDifference, minDif: minDifference})
        }
        findDifference()
    }, [toggle])

    return (
        <div style={ darkMode ? {color: "white"} : {color: "black"}}>
            {open &&
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{overflow: 'auto'}}
                >
                    <Box>
                        <WeatherTemplate data={dataSingle} toggle={toggle} setToggle={setToggle} darkMode={darkMode} setOpen={setOpen}/>
                    </Box>
                </Modal>
            </div>
            }
            <div onClick={handleOpen}>
                <h1>{convertToWeekDay(dataSingle.maxDate)}</h1>
                <FontAwesomeIcon icon={changingIconsForecast(dataSingle)} size="7x" />
                <p>{dataSingle.weather.main}</p>
                <span style={{marginRight: 5}}>MIN: {toggleFC(dataSingle.lowestMinTemp, toggle)}</span>
                <span style={difference.minDif[0] === "ꜛ" ? {color: darkMode ? "#29E5FF" : "green", marginRight: 10} : {color: darkMode ? "#FFF019" : "red", marginRight: 10}}>{difference.minDif}</span>
                <span style={{marginRight: 5}}>MAX: {toggleFC(dataSingle.biggestMaxTemp, toggle)}</span>
                <span style={difference.maxDif[0] === "ꜛ"  ? {color: darkMode ? "#29E5FF" : "green", marginRight: 10} : {color: darkMode ? "#FFF019" : "red", marginRight: 10}}>{difference.maxDif}</span>
            </div>
        </div>
    )
}

export default SmallForecast