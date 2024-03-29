export interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    },
    weather: [{
        id: number;
        main: string;
        description: string;
        icon: string;
    }],
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    },
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    },
    rain: {
        "1h": number;
    }; 
    clouds: {
        all: number;
    },
    dt: number; 
    sys: {
        type: number;
        id: number; 
        country: string;
        sunrise: number;
        sunset: number;
    },
    timezone: number; 
    id: number;
    name: string; 
    cod: number;
}

export interface ForecastData {
    maxDate: string
    biggestMaxTemp: number
    fields: {feels: number, current: number, wind: number, pressure: number, humidity: number}
    lowestMinTemp: number
    weather: {main: string, description: string}
  }

  export interface ForecastDataSingle {
    clouds: {
        all: number;
    },
    dt: number;
    dt_txt: string;
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
    },
    pop: number;
    sys: {
        pod: string;
    }
    visibility: number;
    weather: [{
        id: number;
        icon: string;
        main: string;
        description: string;
    }],
    wind: {
        speed: number;
        deg: number;
        gust: number
    }
}


export interface Coords {
    lat: number;
    long: number
    
}