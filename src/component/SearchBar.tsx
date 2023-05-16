import { useEffect, useState } from "react"
import { TextField, Autocomplete } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import { SearchProps } from "../services/propTypes"
import { handleSearch } from "../services"
import { fetchSearchData } from "../services/fetch-api"

const SearchBar = ({setCoords, setDarkMode}: SearchProps): JSX.Element => {

    const [word, setWord] = useState<string>("")
    const [tempData, setTempData] = useState([])

    useEffect(() => {
        if (word.length < 1 && tempData.length > 1) {
            setTempData([])
        }
        if (word.length > 3) {
            fetchSearchData(word).then((data: any) => {
                setTempData(data)
            })
        }
    }, [word])

    const renderOptions = (props: any, option: any) => {
        return (
            <li {...props} key={props.id}>
                {option?.name + (option?.state ? ", " + option.state : "")}
            </li>
        )
    }
    
    return (
        <div style={{display: "flex", justifyContent: "center", marginBottom: "50px"}}>
            <FontAwesomeIcon onClick={() => setDarkMode(false)} style={{color: "yellow", fontSize: "30px", marginRight: "20px", marginTop: "0px"}} icon={faCloudSun} />
            <form style={{width: '500px'}}>
                    <Autocomplete 
                        options={tempData}
                        blurOnSelect
                        onChange={async (e, value) => {
                            if (!value?.name) return
                            handleSearch(e, value.name, setCoords)
                        }}
                        fullWidth
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    placeholder: "Search for City",
                                }}
                                onChange={(e) => setWord(e.target.value)}
                            />
                        )}
                        getOptionLabel={(option: any) => option?.name + (option?.state ? ", " + option.state : "") ?? "N/A"}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        renderOption={renderOptions}
                    />
            </form>
            <FontAwesomeIcon onClick={() => setDarkMode(true)} style={{color: "darkblue", fontSize: "30px", marginLeft: "20px"}} icon={faCloudMoonRain} />
        </div>
    )
}

export default SearchBar