import { helpers } from '@/utils/helpers';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSpring } from 'react-spring';
import AnimatedImages from './Animated/AnimatedImages';
import { DetailsProps } from '@/interfaces';



const LeftSide:React.FC<DetailsProps>
 = ({fahrenheitToCelcsius,weatherData}) => {

// const [currentImageIndex,setCurrentImageIndex]=useState(0)

const images=["./rainy.png","./snowy.png","./sunny.png"]
 
const {useConvertTime}=helpers()


const { result, formattedSunRise } = useConvertTime(weatherData);



// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   }, 3000); 
//   return () => clearInterval(interval);
// }, [images]);


  if (!weatherData || weatherData?.timezone===undefined) {
    return   <div className='ms-4  lg:ms-24 lg:min-h-full w-full lg:w-2/4  lg:justify-between '>
   
      <div className=' flex-col text-center justify-center items-center lg:flex  pt-8'>
        <p className='m-auto text-5xl lg:text-8xl text-white'>Weather App</p>
        </div>
        <div className='flex justify-center pt-4'>
          {/* {images.map((image, index) => (
            <div key={index} style={{  display: index === currentImageIndex ? 'block' : 'none' }}>
              <AnimatedImages key={index}>
              <img className='w-[200px] lg:w-[300px] m-auto' src={image} alt="" />
              </AnimatedImages>
            </div>
          ))} */}
        </div>

      
        
    </div>
  }


  console.log("nedir",weatherData);
  


const mainTemp = weatherData.main?.temp !== undefined ? fahrenheitToCelcsius(weatherData.main.temp) : null;

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
      </div>
    </div>
  )
}

export default LeftSide

