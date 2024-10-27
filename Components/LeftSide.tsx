import { helpers } from '@/utils/helpers';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSpring } from 'react-spring';
import AnimatedImages from './Animated/AnimatedImages';
import { DetailsProps } from '@/interfaces';

const LeftSide:React.FC<DetailsProps>
 = ({fahrenheitToCelcsius,weatherData}) => {

const [currentImageIndex,setCurrentImageIndex]=useState(0)

const images=["./rainy.png","./snowy.png","./sunny.png"]
 
const {useConvertTime}=helpers()


const { result, formattedSunRise } = useConvertTime(weatherData);



// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   }, 3000); 
//   return () => clearInterval(interval);
// }, [images.length]);


  if (!weatherData) {
    return   <div className='ms-4  lg:ms-24 lg:min-h-full w-full lg:w-2/4  lg:justify-between '>
    {/* <div className=''>
      <img src="./logo.svg" alt="" />
      </div> */}
      <div className=' flex-col text-center justify-center items-center lg:flex  pt-8'>
        <p className='m-auto text-5xl lg:text-8xl text-white'>Weather App</p>
        </div>
        <div className='flex justify-center pt-4'>
          {images.map((image, index) => (
            <div key={index} style={{  display: index === currentImageIndex ? 'block' : 'none' }}>
              <AnimatedImages key={index}>
              <img className='w-[200px] lg:w-[300px] m-auto' src={image} alt="" />
              </AnimatedImages>
            </div>
          ))}
        </div>

      
        
    </div>
  }


  console.log("nedir",weatherData);
  
  // const timezoneOffset = 14400;    
//   const timezoneOffset =weatherData?.timezone || 0

// const hourZoneOffset=timezoneOffset/3600  
// console.log("saatla",hourZoneOffset);

// const date=new Date() 
// console.log("date",date);
// // const utcTime=date.getTime()+ date.getTimezoneOffset()*60000
// // console.log("utc",utcTime);
// // const  localTime=new Date(utcTime+timezoneOffset*1000)
// // console.log("locall",localTime);

// // const sunRise=1729998268*1000
// // const sunSet= 1730036633*1000

// const sunRise = new Date(weatherData?.sys.sunrise*1000 );
// const sunSet=new Date(weatherData?.sys.sunset*1000 )
// // Saat dilimi offset'ini milisaniye olarak ekle
// // const localDate = new Date(utcDate.getTime() + timezoneOffset * 1000);

// // console.log("utcDateeeee",utcDate)
// // console.log("localDate",localDate)


// const optionsTime: Intl.DateTimeFormatOptions = {
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit'
// };
// const optionsDate: Intl.DateTimeFormatOptions = {
//   year: 'numeric',
//   month: 'short',
//   day: '2-digit',
//   weekday: 'short',
//   timeZoneName: 'short'
// };
// const optionsSubh={
//   hour:"2-digit",
//   minute:"2-digit"
// }
// const formattedTime=date.toLocaleTimeString("en-US",optionsTime)
// const formattedDate=date.toLocaleDateString("en-US",optionsDate)
// const  formattedSunRise=sunRise.toLocaleTimeString("en-US",optionsTime)
// const  formattedSunSet=sunSet.toLocaleTimeString("en-US",optionsTime)

// console.log("formattedSunRise",formattedSunRise);
// console.log("formattedSunSet",formattedSunSet);


// const result=`${formattedTime}, ${formattedDate}`
// console.log("formated",result);



const mainTemp = weatherData.main?.temp !== undefined ? fahrenheitToCelcsius(weatherData.main.temp) : null;

const timeResults = useConvertTime(weatherData);


return (
    <div className='  lg:m-auto  min-h-full lg:w-2/4  flex flex-col justify-between '>
  

      <div className='text-white px-4  lg:mt-36 flex lg:items-center gap-[10px]'>
       <div className=' relative flex items-center'>
        <p className='text-4xl lg:text-[120px] text-white'>{mainTemp}<span className=' absolute top-0 md:top-[20px] lg:top-[-40px] text-2xl lg:text-6xl'>o</span></p>
        </div>
        <div className='ps-10'>
          <p className=' text-4xl lg:text-[60px]'>{weatherData.name}</p>
          <p className='text-sm lg:mt-6 font-medium lg:text-base'>{result} </p>
        </div>
        <div className='hidden md:flex lg:items-end pt-8'>
          <img src="./cloud.svg"  alt='cloud'/>
        </div>
      </div>
    </div>
  )
}

export default LeftSide

