import { DetailsProps } from '@/interfaces';
import React from 'react'

const DetailsCard:React.FC<DetailsProps> = ({weatherData,fahrenheitToCelcsius}) => {

  const mainTemp = weatherData?.main?.temp !== undefined
  ? fahrenheitToCelcsius(weatherData.main.temp)
  : null;    // const minntemp=fahrenheitToCelcsius(weatherData.main.temp_min)

    return (
        <div>
          <p className='text-lg mt-6 lg:mt-10'>Weather Details...</p>
          <div>
            <table className=' text-base lg:text-lg mt-10 lg:mt-[52px]'>
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
          </div>
        </div>
      );
    }

export default DetailsCard
