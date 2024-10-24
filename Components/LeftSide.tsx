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


useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000); 
  return () => clearInterval(interval);
}, [images.length]);


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
  const timezoneOffset =weatherData?.timezone || 0

const hourZoneOffset=timezoneOffset/3600  
console.log("saatla",hourZoneOffset);

const date=new Date() 
console.log("date",date);
const utcTime=date.getTime()+ date.getTimezoneOffset()*60000
console.log("utc",utcTime);
const  localTime=new Date(utcTime+timezoneOffset*1000)
console.log("locall",localTime);

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
const formattedTime=localTime.toLocaleTimeString("en-US",optionsTime)
const formattedDate=localTime.toLocaleDateString("en-US",optionsDate)

const result=`${formattedTime}, ${formattedDate}`
console.log("formated",result);



const mainTemp = weatherData.main?.temp !== undefined ? fahrenheitToCelcsius(weatherData.main.temp) : null;
return (
    <div className='  m-auto  min-h-full lg:w-2/4  flex flex-col justify-between '>
  

      <div className='text-white  flex items-center gap-[10px]'>
       <div className=' relative'>
        <p className='text-6xl lg:text-[143px] text-white'>{mainTemp}<span className=' absolute  lg:top-0 text-2xl lg:text-6xl'>o</span></p>
        </div>
        <div className='ps-10'>
          <p className=' text-4xl lg:text-[60px]'>{weatherData.name}</p>
          <p className='text-sm lg:mt-6 lg:text-base'>{result} </p>
        </div>
        <div className='flex lg:items-end pt-8'>
          <img src="./cloud.svg"  alt='cloud'/>
        </div>
      </div>
    </div>
  )
}

export default LeftSide

