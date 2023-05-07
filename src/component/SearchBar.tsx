import { TextField } from "@mui/material"
import { FormEvent, useState } from "react"


const SearchBar = () => {

    const [word, setWord] = useState<string>("")


    return (
        <div style={{display: "flex", justifyContent: "center", marginBottom: "50px"}}>
            <form onSubmit={(e: FormEvent) => console.log(e)} style={{width: '500px'}}>
                    <TextField fullWidth id="outlined-search" label="Search location" type="search" variant="filled" style={{backgroundColor: 'white'}} onChange={(e) => setWord(e.target.value)}/>
            </form>
        </div>
    )
}

export default SearchBar