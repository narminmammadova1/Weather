import { time } from "console";

export const helpers=()=>{

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
       
        
        const sunRise = new Date(weatherData?.sys.sunrise*1000 );
        const sunSet=new Date(weatherData?.sys.sunset*1000 )
       
        
        const optionsTime: Intl.DateTimeFormatOptions = {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        };
        const optionsDate: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          weekday: 'short',
          timeZoneName: 'short'
        };
        const optionsSubh={
          hour:"2-digit",
          minute:"2-digit"
        }
        const formattedTime=date.toLocaleTimeString("en-US",optionsTime)
        const formattedDate=date.toLocaleDateString("en-US",optionsDate)
        const  formattedSunRise=sunRise.toLocaleTimeString("en-US",optionsTime)
        const  formattedSunSet=sunSet.toLocaleTimeString("en-US",optionsTime)
        
        console.log("formattedSunRise",formattedSunRise);
        console.log("formattedSunSet",formattedSunSet);
        
        
        const result=`${formattedTime}, ${formattedDate}`
        console.log("formated",result);
        
        

        return {
            formattedTime,
            formattedDate,
            formattedSunRise,
            formattedSunSet,
            result
        };




      }



return {fahrenheitToCelcsius,useConvertTime}



}

