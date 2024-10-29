import { ReactNode } from "react";

export interface AnimatedPropss{
    children:ReactNode
}
interface weatherDataprops{
    main: {
        temp: number;     
        humidity: number;  
    };
    wind: {
        speed: number;    
        // deg?: number;     
    },
    sys:{
        sunrise:number,
        sunset:number
    }
    clouds: {
        all: number;       
    };
    timezone?:number,
    name?:string
}



export interface DetailsProps{
    weatherData:weatherDataprops  | null | undefined
    fahrenheitToCelcsius:(fahrenheit: number) => string
setWeatherData?:any,
setIsNight?:any
}