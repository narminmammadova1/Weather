import { DetailsProps } from '@/interfaces';
import { helpers } from '@/utils/helpers';
import React from 'react'
import { FaMoon, FaSun  } from "react-icons/fa";

const DetailsCard:React.FC<DetailsProps> = ({weatherData,fahrenheitToCelcsius}) => {

  const mainTemp = weatherData?.main?.temp !== undefined
  ? fahrenheitToCelcsius(weatherData.main.temp)
  : null;    // const minntemp=fahrenheitToCelcsius(weatherData.main.temp_min)


  const {useConvertTime}=helpers()


const { result, formattedSunRise,formattedSunSet } = useConvertTime(weatherData);
    return (
        <div>
          <p className='text-lg mt-4 lg:mt-10'>Weather Details...</p>
          <div>
            <table className=' text-base lg:text-lg mt-6 lg:mt-[52px]'>
              <thead>
                <tr>
                  <th className='font-medium pb-4  flex  text-start w-full'>THUNDERSTORM WITH LIGHT DRIZZLE</th>
                </tr>
              </thead>
              <tbody className='text-lg  font-light'>
                <tr className=' '>
                  <td className=' py-2'>Temp</td>
                  <td className=''>{mainTemp}</td>
                  <td className='ps-4'><img src="temp.svg" alt="Temp max icon" /></td>
                </tr>
                <tr>
                 
                </tr>
                <tr>
                  <td className='py-2'>Humidity</td>
                  <td>{weatherData?.main?.humidity}%</td>
                  <td className='ps-4'><img src="drop.svg" alt="Humidity icon" /></td>
                </tr>
                <tr>
                  <td className='py-2'>Cloudy</td>
                  <td>{weatherData?.clouds?.all}%</td>
                  <td className='ps-4'><img src="cloud2.svg" alt="Cloudy icon" /></td>
                </tr>
                <tr>
                  <td className='py-2'>Wind</td>
                  <td>{weatherData?.wind?.speed}km/h</td>
                  <td className='ps-4'><img src="wind.svg" alt="Wind icon" /></td>
                </tr>
              </tbody>
            </table>

            <div className='500 text-xl '>
              <div className='flex my-2 gap-2 items-center'> 
              < FaSun 
              className='text-yellow-300'/>

              {/* <img className='w-[26px] ' src="/sunny.png" alt="" /> */}
              <p className='gap-4 flex '>
              SunRise:    
              <span className=''>  {formattedSunRise}</span>
             </p>

              </div>
              <div className='flex items-center my-4 gap-2' >
              {/* <img className='w-[26px]' src="/sunny.png" alt="" /> */}
              <FaMoon className='text-yellow-400' />

              <p className='flex gap-6 '>

                SunSet:
<span>      {formattedSunSet}</span>
           </p>
              </div>
            
            </div>
          </div>
        </div>
      );
    }

export default DetailsCard
