import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { changingIcons, convertToWeekDay, toggleFC, toggleFCNumber } from '../services'
import { ForecastSingleProps } from "../services/propTypes"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
  };

const SmallForecast = ({dataSingle, toggle, data}: ForecastSingleProps): JSX.Element => {

    const [difference, setDifference] = useState<{maxDif: string, minDif: string}>({maxDif: "", minDif: ""})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const findDifference = () => {
            let minDifference: string = (toggleFCNumber(dataSingle.main.temp_min, toggle) - toggleFCNumber(data.main.temp_min, toggle)).toFixed(0)
            let maxDifference: string = (toggleFCNumber(dataSingle.main.temp_max, toggle) - toggleFCNumber(data.main.temp_max, toggle)).toFixed(0)
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
        <div>
            {open &&
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a 
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                       
                    </Typography>
                    </Box>
                </Modal>
            </div>
            }
            <div onClick={handleOpen}>
                <h1>{convertToWeekDay(dataSingle.dt_txt)}</h1>
                <FontAwesomeIcon icon={changingIcons(dataSingle)} size="7x" />
                <p>{dataSingle.weather[0].main}</p>
                <span style={{marginRight: 5}}>MIN: {toggleFC(dataSingle.main.temp_min, toggle)}</span>
                <span style={difference.minDif[0] === "ꜛ" ? {color: "green", marginRight: 10} : {color: "red", marginRight: 10}}>{difference.minDif}</span>
                <span style={{marginRight: 5}}>MAX: {toggleFC(dataSingle.main.temp_max, toggle)}</span>
                <span style={difference.maxDif[0] === "ꜛ"  ? {color: "green", marginRight: 10} : {color: "red", marginRight: 10}}>{difference.maxDif}</span>
            </div>
        </div>
    )
}

export default SmallForecast