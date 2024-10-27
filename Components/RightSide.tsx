


import React, { useRef, useState } from 'react';
import DetailsCard from './DetailsCard';
import { ClipLoader, GridLoader } from 'react-spinners';
import { DetailsProps } from '@/interfaces';
import { helpers } from '@/utils/helpers';

const RightSide:React.FC<DetailsProps>= ({ fahrenheitToCelcsius,setWeatherData ,weatherData}) => {
    const [loading, setLoading] = useState(false);
    const searchCity = useRef<HTMLInputElement | null>(null);
const {useConvertTime}=helpers()
    const handleSearch = async () => {
        const city = searchCity.current?.value  || ""
        if (city) {
            setLoading(true); 
            try {
                const response = await fetch(
                    `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
                    {
                        method: "GET",
                        headers: {
                            'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
                            'x-rapidapi-key': "33c10caecamsh18c2fe0dfbd8f01p10b04cjsnd520c35246b5"
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Error occurred while fetching weather data");
                }

                const data = await response.json();
                console.log("Weather data:", data);
                setWeatherData(data);
                localStorage.setItem("weatherData",JSON.stringify(data))
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false); 
            }
        }
    };
    console.log("rightdeki",weatherData);

   
    


    if (loading) return (
        <div className='w-full h-full fixed top-0 left-0 right-0 bottom-0  bg-transparent opacity-35  flex items-center justify-center z-30'>
          <GridLoader className='text-white' loading={true} size={60} />
        </div>
      );

    return (
        <div className='p-4  lg:p-9 w-full lg:w-3/4 lg:bg-slate-100 lg:bg-opacity-30 text-white'>
            <div className='flex justify-between'>
            <div className=''>
      <img src="./logo.svg" alt="" />
      </div>
      
                <input
                    ref={searchCity}
                    className='lg:text-xl w-1/2 text-white p-2 border-b-2 bg-transparent'
                    placeholder='Search location'
                    type="search"
                />
                <button onClick={handleSearch} className='relative lg:right-8 top-2 lg:top-0'>
                    <img className='w-[20px] lg:w-[30px]' src="./search.svg" alt="" />
                </button>
                <button onClick={()=>{
                    localStorage.removeItem("weatherData")
                    setWeatherData(null)
                    // searchCity.current.value=""
                }} className=' border-gray-00 border rounded-md lg:px-2  h-[30px]  mt-4  ms-2 lg:mt-2 '>
Clear              </button>
            </div>
            {weatherData ? (
                <DetailsCard fahrenheitToCelcsius={fahrenheitToCelcsius} weatherData={weatherData} />
            ) : (
                <div className=''></div>
            )}
        </div>
    );
}

export default RightSide;