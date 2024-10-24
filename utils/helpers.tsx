import { time } from "console";

export const helpers=()=>{

    // const fahrenheit=55.6
    const fahrenheitToCelcsius=(fahrenheit:any)=>{

        const celcsius= ((fahrenheit-32)/1.8).toFixed(1)
        console.log(celcsius,"celc");
            return celcsius

      }
return {fahrenheitToCelcsius}



}

