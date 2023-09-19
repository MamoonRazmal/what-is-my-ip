//import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react"
import "./styles.css"
export default function MainPage({data,locs,as}){
   
   
    return(
        <>
        <div className="supermain">
        <div className="mainpage">
            <form>
            <label >Your IP

                <input type="text " value={data.ip}></input>

            </label>
            <label >Your Domain info is 
           
            <input type="text " defaultValue={data.isp
}></input>
          
               
            </label>
            <label >Your ISP 
            
            
                      <input type="text " defaultValue={data.isp
}></input>
          
                   
             

               
                
            </label>
            <label >Your Location

                <input type="text " defaultValue={data.ip}></input>
                
            </label>
       

            </form>
        </div>
        </div>
        </>
    )
}