
import { Inter } from "next/font/google";
import LeftSide from "../Components/LeftSide";
import { useEffect, useState } from "react";
import { helpers } from "@/utils/helpers";
import RightSide from "@/Components/RightSide";
import { GridLoader} from 'react-spinners';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const savedData = localStorage.getItem("weatherData");
    if (savedData) {
      setWeatherData(JSON.parse(savedData)); 
    }
  }, []); 
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null);
console.log("homedeki",weatherData);
const [loading,setLoading]=useState(false)
 const  {fahrenheitToCelcsius,}=helpers()


 
  if (loading) return <div>      <GridLoader loading={true} size={50} />
</div>;
  if (error) return <div>Error: {error}</div>;




  
  return (
    <main className="md:flex lg:flex min-h-screen w-full">
            <RightSide   weatherData={weatherData} setWeatherData={setWeatherData}  fahrenheitToCelcsius={fahrenheitToCelcsius} />

      <LeftSide  fahrenheitToCelcsius={fahrenheitToCelcsius} weatherData={weatherData} />
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