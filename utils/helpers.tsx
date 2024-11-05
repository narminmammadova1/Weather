import { time } from "console";
import { useEffect, useState } from "react";

export const helpers=()=>{
const [isEvening,setIsEvening]=useState(false)
    // const fahrenheit=55.6
    const fahrenheitToCelcsius=(fahrenheit:any)=>{

        const celcsius= ((fahrenheit-32)/1.8).toFixed(1)
        console.log(celcsius,"celc");
            return celcsius

      }

      const  useConvertTime=(weatherData:any)=>{

        const timezoneOffset =weatherData?.timezone || 0

        const hourZoneOffset=timezoneOffset/3600  
        console.log("saatla",hourZoneOffset);
        
        const date=new Date() 
        console.log("date",date);
       

const utcTime=date.getTime()+date.getTimezoneOffset()*60000

console.log("utc",utcTime);


const  localTime=utcTime+timezoneOffset*1000
console.log("locall",localTime);
        
const localDate=new Date(localTime)
console.log("newDatelocale",localDate);
       
 
        const sunRise=weatherData?.sys?.sunrise * 1000
      
        const difference=date.getTime()-utcTime
        // console.log("difffffffffffffffffff",difference/3600/1000);
        
const sunSet=weatherData?.sys?.sunset * 1000
const  localRisee=sunRise+timezoneOffset*1000-difference
const  localSett=sunSet+timezoneOffset*1000-difference

const  localRise=new Date(localRisee)
const localSet=new Date(localSett)

console.log("localRisee",localRise);
console.log("localSett",localSet);







        const optionsDate: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          weekday: 'short',
        };
    
     
        const formattedDate=localDate.toLocaleDateString("en-US",optionsDate)

        
        const formattedTime=localDate.toLocaleTimeString()

        const  formattedSunRise=localRise.toLocaleTimeString()
        const  formattedSunSet=localSet.toLocaleTimeString()
        
       
        const localDateTime = new Date(localTime);
        
        const result=`${formattedTime},   ${formattedDate}`
        console.log("formated",result);
        
       

        

        return {
            formattedTime,
            formattedDate,
            formattedSunRise,
            formattedSunSet,
            result, localTime,
            localRise,
            localSet,
            localDate
        };




      }



return {fahrenheitToCelcsius,useConvertTime,setIsEvening,isEvening}



}


