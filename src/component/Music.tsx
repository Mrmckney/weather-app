// import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMusic } from '@fortawesome/free-solid-svg-icons';
// import { WeatherData } from '../services/interfaces';
// import { fetchWeatherData } from '../services/fetch-api';
import { MusicProps } from '../services/propTypes';


const Music = ({}: MusicProps) : JSX.Element  => {

    // const [song, setSong] = useState<string>("")
    // const [data, setData] = useState<WeatherData>({} as WeatherData)

    // useEffect(() => {
    //     if (coords.lat && coords.long) {
    //         fetchWeatherData(coords).then((weatherData) => {
    //             setData(weatherData)
    //         });
    //     }
    // }, [coords])

    // function attachSong() {
    //     switch (data.weather[0].main) {
    //         case 'Thunderstorm':
    //             setSong("https://www.youtube.com/watch?v=v2AC41dglnM");
    //             break;
    //         case "Drizzle":
    //             setSong("https://www.youtube.com/watch?v=StB2WR4Hwdo");
    //             break;
    //         case "Rain":
    //             setSong('https://www.youtube.com/watch?v=fFeEGYLkupE');
    //             break;
    //         case "Snow": 
    //             setSong("https://www.youtube.com/watch?v=FnpJBkAMk44");
    //             break;
    //         case "Mist": 
    //             setSong("https://www.youtube.com/watch?v=RMONGMDEerI");
    //             break;
    //         case "Smoke": 
    //             setSong("https://www.youtube.com/watch?v=cm5SQpmgJ10");
    //             break;
    //         case "Haze":
    //             setSong("https://www.youtube.com/watch?v=Ao81ziiXHhs");
    //             break;
    //         case "Dust": 
    //             setSong("https://www.youtube.com/watch?v=rY0WxgSXdEE");
    //             break;
    //     }
    // }

    return (
        <>
            <h2>Get in the mood!</h2>
            {/* <a href={song} target={'_blank'}><FontAwesomeIcon icon={faMusic} /></a> */}
        </>
    )
}

export default Music