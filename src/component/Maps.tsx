import { fetchMapsData } from "../services/fetch-api"
import { useEffect, useState } from "react";
import { MapProps } from "../services/propTypes";

const Maps = ({coords}: MapProps): JSX.Element => {
    const [url, setUrl] = useState("")
    useEffect(() => {
        if (coords.latitude && coords.longitude) {
            fetchMapsData(coords).then((mapData) => {
                console.log(mapData)
            });
        }
    }, [coords])
    
    return (
        <>
            <h1>Maps</h1>
            <img src={url} alt="" />
        </>
    )
}

export default Maps