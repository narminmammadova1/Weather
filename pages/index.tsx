
import { Inter } from "next/font/google";
import LeftSide from "../Components/LeftSide";
import { useEffect, useState } from "react";
import { helpers } from "@/utils/helpers";
import RightSide from "@/Components/RightSide";
import { GridLoader} from 'react-spinners';
import AnimatedImages from "@/Components/Animated/AnimatedImages";

const inter = Inter({ subsets: ["latin"] });
const images=["./rainy.png","./snowy.png","./sunny.png"]

export default function Home() {

  const [currentImageIndex,setCurrentImageIndex]=useState(0)

  useEffect(() => {
    const savedData = sessionStorage.getItem("weatherData");
    if (savedData) {
      setWeatherData(JSON.parse(savedData)); 
    }
  }, []); 
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null);
console.log("homedeki",weatherData);
const [loading,setLoading]=useState(false)
 const  {fahrenheitToCelcsius,}=helpers()
const [isNight,setIsNight]=useState(false)

 
  if (loading) return <div>      <GridLoader loading={true} size={50} />
</div>;
  if (error) return <div>Error: {error}</div>;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images]);
  

  
  return (
    <main className="md:flex lg:flex min-h-screen w-full">
  
            <RightSide setIsNight={setIsNight}  weatherData={weatherData} setWeatherData={setWeatherData}  fahrenheitToCelcsius={fahrenheitToCelcsius} />

      <LeftSide  fahrenheitToCelcsius={fahrenheitToCelcsius} weatherData={weatherData} />
    
      {!weatherData && (
        <div className="fixed top-20 -z-10 w-full h-full">
          {images.map((image, index) => (
            <div key={index} style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
              <AnimatedImages>
                <img className='w-[200px] lg:w-[300px] m-auto' src={image} alt="" />
              </AnimatedImages>
            </div>
          ))}
        </div>
      )}



    </main>
  );
}


// export async  function getServerSideProps(){

// try{
// const response=await fetch()

// }
// catch(err){
//   console.log(err);
  
// }

// }