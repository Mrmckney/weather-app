import { TextField, Autocomplete } from "@mui/material"
import { FormEvent, useEffect, useState } from "react"
import { SearchProps } from "../services/propTypes"
import { handleSearch } from "../services"
import { fetchSearchData } from "../services/fetch-api"


const SearchBar = ({setCoords}: SearchProps): JSX.Element => {

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
        </div>
    )
}

export default SearchBar