// import React, { useRef, useState } from 'react'

// const MainHeader = ({weatherData,setWeatherData}) => {

//     const [loading, setLoading] = useState(false);
//     const searchCity = useRef();
  
//     const handleSearch = async () => {
//         const city = searchCity.current.value;
//         if (city) {
//           setLoading(true);
//           try {
//             const response = await fetch(
//               `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
//               {
//                 method: "GET",
//                 headers: {
//                   'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
//                   'x-rapidapi-key': "bace0f304fmsh3b2b3ce6f4c86bcp10848ajsna995820d8d0e"
//                 },
//               }
//             );
    
//             if (!response.ok) {
//               throw new Error("Error occurred while fetching weather data");
//             }
    
//             const data = await response.json();
//             setWeatherData(data);
//             localStorage.setItem("weatherData", JSON.stringify(data));
//           } catch (err) {
//             console.log(err);
//           } finally {
//             setLoading(false);
//           }
//         }
//       };





//   return (
//     <div className='flex w-full justify-between'>
//        <div className=''>
//       <img src="./logo.svg" alt="" />
//       </div>
//       <div className='bg-red-400'>
//         <input
//           ref={searchCity}
//           className='text-xl text-white p-2 border-b-2 bg-transparent'
//           placeholder='Search location'
//           type="search"
//         />
//         <button onClick={handleSearch} className='relative right-8 top-2'>
//           <img src="./search.svg" alt="Search" />
//         </button>
//         <button onClick={() => {
//           localStorage.removeItem("weatherData");
//           setWeatherData(null);
//         }} className='px-2 border-2 rounded-md'>
//           Refresh
//         </button>
//       </div>

//     </div>
//   )
// }

// export default MainHeader
