
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import Map from "./Map";
import MainPage from "./MainPage";
import { useSearchParams } from "react-router-dom";
import Time from "./Time";

import WeatherApp from "./WeatherApp";
export default function App(){
const [loc,Setloc]=useState([]);
const [locs,Setloco]=useState([])
const [as,Setas]=useState([])
//const [cn,Setcn]=useState([])

const data=  async()=>{
  const d= await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_REACT_APP_AN}`);
 // const d= await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=0c9cc6d4a0a34978881a6230e22f4c68");
  const response= await d.json();
  console.log("this is the respinse i get",response)
  Setloc(response);
  Setloco(response);
  Setas(response);
}
//const country = async()=>{
 // const res= await fetch('http://api.countrylayer.com/v2/all?access_key=c918bbb32d5e3ccbae721677df97342a')
  //const data=await res.json();
  //Setcn(data)
  
//}
useEffect(()=>{
  //country();
  data();
  console.log("this is the value of locations",locs)
 
  
},[])
//console.log("this country info",cn)
console.log("this is the value of locations",locs)

  return(
    <>
    <div>
      <WeatherApp />
    <h1>{import.meta.env.VITE_REACT_APP_AN}</h1>
      <Time />
    <MainPage data={as} locs={locs} as={as}/>
     <Map locs={locs}/>
   
   
  
   
    <p>this is the main</p>
    <Navbar />
    </div>
    </>
  )

}