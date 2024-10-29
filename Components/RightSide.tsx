
import React, { useEffect, useRef, useState } from 'react';
import DetailsCard from './DetailsCard';
import { ClipLoader, GridLoader } from 'react-spinners';
import { DetailsProps } from '@/interfaces';
import { helpers } from '@/utils/helpers';

const RightSide:React.FC<DetailsProps>= ({ fahrenheitToCelcsius,setIsNight, setWeatherData ,weatherData}) => {
    const [loading, setLoading] = useState(false);
    const searchCity = useRef<HTMLInputElement | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { useConvertTime, isEvening, setIsEvening } = helpers();
    const { localTime, localRise, localSet ,localDate} = useConvertTime(weatherData);
    const handleSearch = async () => {
        const city = searchCity.current?.value  || ""
        if (city) {
            setLoading(true); 
            setErrorMessage(null); 
            try {
                const response = await fetch(
                    `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
                    {
                        method: "GET",
                        headers: {
                            'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
                            'x-rapidapi-key': "cfb45c07c1msh8e6dda611bc534cp11c056jsn3ba51157f683"
                        },
                    }
                );

                if (!response.ok) {
                    if (response.status === 404) {
                        setErrorMessage("ERROR: City not found. Please write correctly.");
                    } else if (response.status === 429) {
                        setErrorMessage("ERROR: Too many requests.");
                    } else {
                        setErrorMessage("ERROR: An unexpected error occurred.");
                    }
                    setWeatherData(null);
                    return;
                }

                const data = await response.json();
                console.log("Weather data:", data);
                setWeatherData(data);
                localStorage.setItem("weatherData",JSON.stringify(data))
            } catch (err) {
                console.log(err);
                setErrorMessage("ERROR: An unexpected error occurred.");
            } finally {
                setLoading(false); 
            }
        }
    };
    console.log("rightdeki",weatherData);

   
    useEffect(() => {
        if (localDate.getTime() >= localSet.getTime() || localDate.getTime()<localRise.getTime() ) {
            setIsEvening(true);
        } else {
            setIsEvening(false);
        }
    }, [localTime, localSet]);


    useEffect(() => {
        if (isEvening) {
            document.body.classList.add('evening');
        } else {
            document.body.classList.remove('evening');
        }
    }, [isEvening]);


    if (loading) return (
        <div className='w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-black flex items-center justify-center z-30'>
          <ClipLoader className='text-white' color='blue' loading={true} size={90} />
        </div>
      );
      
    return (
        <div className='p-4  lg:p-9 w-full lg:w-3/4 lg:bg-slate-100 lg:bg-opacity-30 text-white'>
            <div className='flex justify-between'>
            <div className=''>
      <img src="./logo.svg" alt="" />
      </div>
       {isEvening ? <img className='w-[40px] lg:w-[50px]'  src="/mn.png" alt="" /> :  <img src="/sn.png"   className='w-[50px]' alt="" />}
                <input
                    ref={searchCity}
                    className='lg:text-xl w-1/2 text-white px-2  bg-transparent'
                    placeholder='Search location'
                    type="search"
                />
                <button onClick={handleSearch} className='relative right-6 lg:right-14  lg:top-0'>
                    <img className='w-[20px] lg:w-[30px]' src="./search.svg" alt="" />
                </button>
                <button onClick={()=>{
                    localStorage.removeItem("weatherData")
                    setWeatherData(null)
                }} className=' border-gray-00 border rounded-md lg:px-2  h-[30px]  mt-4  ms-2 lg:mt-2 '>
Clear              </button>
            </div>


            {errorMessage && (
                <div className='text-red-500  fixed top-[12%] right-0 flex w-full justify-center  items-center text-xl  lg:text-4xl  mt-4'>
                 <div className=' '>   {errorMessage}</div>
                </div>)          
}


            {weatherData && (
                <DetailsCard setIsNight={setIsNight} fahrenheitToCelcsius={fahrenheitToCelcsius} weatherData={weatherData} />
            ) 
            }
        </div>
    );
}

export default RightSide;