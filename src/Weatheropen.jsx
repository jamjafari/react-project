import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import getWeatherInfo from './Components/weather/weatherAction'
import PersiansDate from "./Components/PersiansDate"



const Weatheropen=()=>{
    const {loading,data,error}=useSelector(state=>state.weatherReducer);
    const dispatch=useDispatch();
    const [backMode,setbackMode]=useState('cold')
    // const loading=useSelector(state=>state.loading);
    // const data=useSelector(d=>d.data);
    // const error=useSelector(state=>state.error);
    const [query,setQuery]=useState('')

    const handelGetWeather=e=>{
        e.preventDefault()
        dispatch(getWeatherInfo(query))
        // console.log(data);
        setQuery('')
    }
    useEffect(()=>{
        if(!data.main){
            return
        }
        let temp =data.main.temp;
        if(temp<12){
            setbackMode('cold')
        }
        else if(temp<23){
            setbackMode('usual')
        }
        else if(temp<30){
            setbackMode('warm')
        }
       
    },[data])

    return(
        <div className={`app pt-4 container-fluid back_${backMode}`}>
            <div className="row justify-content-center py-3  pt-4">
                <div className="col-10 col-md-6 col-lg-4 col-xl-3">
                    
                        <form  onSubmit={handelGetWeather}>
                        <input type="text"
                        className="search_input w-100 text_color placeholder"
                        placeholder={data.name ||'City or Country'}
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        
                        />
                    </form>

                </div>

            </div>
            {loading ? (

            <div className="row justify-content-center py-3">
                <div className="col-9 col-md-6 col-lg-4 col-lx-3">
                    <div className="spinner-border" role="status">
                        <span className="visually_hidden"></span>

                    </div>

                </div>

            </div>
             ) : data.main ?(  
                <>
                <div className="row justify-content-center py-3 pt-4">
                    <div className="col-11 col-md-8 col-lg-4 col-lx-3">
                       <div className="temprature_box pt-3">
                        <span>
                              { Math.round(data.main.temp)} 
                             </span>℃

                       </div>

                    </div>

                </div>
                <div className="row justify-content-center py-3 pt-4">
                
                    <div className="col-11 col-md-8 col-lg-4 col-lx-3">
                       <h3 className="text-center text-color pt-3">
                        <PersiansDate/>

                       </h3>

                    </div>

                </div>
                <div className="row justify-content-center py-3 pt-4">
                    <div className="col-11 col-md-8 col-lg-4 col-lx-3">
                        <h1 className="text-center fa-3x lathin-text text-color">
                             {data.weather[0].main} 
                            </h1>
                    </div>
                </div>
                </>
             ): error ?( 
                <h3 className="text-center text-color"> write corectlly city name!</h3>
              ) : (  
                <h3 className=" text-center text-color">Search your location</h3>
              ) 
         } 
        </div>

    );
}
export default Weatheropen;