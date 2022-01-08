import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Axios from "axios"
import ForecastDay from "./components/ForecastDay";
import "react-responsive-modal/styles.css"
import {Modal} from "react-responsive-modal";

const App = () => {

    const [open, setOpen] = useState(false)

    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    const [city, setCity] = useState('')
    const [data, setData] = useState('')
    const [fetched, setFeched] = useState(false)

    const headers = {
        'Content-Type': 'text/plain'
    };

    const getCityState = (value) => {
        setCity(value)
    }

    const handleForm = () => {
        const data = {
            city: city
        }

        Axios.post('https://app-marko-weather.herokuapp.com/forecast', data, headers).then(
            (r)=>{
                if(r.data!=='error'){
                    console.log(r.data)
                    setData(r.data)
                    setFeched(true)
                }else{
                    setFeched(false)
                    onOpenModal()
                    console.log('abrete modal poronga')
                }
                
            }
        ).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="w-auto h-screen">
            <Modal classNames={'bg-red-500'} open={open} onClose={onCloseModal} center>
             <h2 className="text-lg font-semibold">Hey!</h2>
             <p>Something went wrong! <br /> Try tiping another city =D </p>
            </Modal>
            <Navbar />
            <Search setValue={getCityState} handleForm={handleForm} />
            {fetched ? <div className="container mx-auto">
                <div className="flex flex-col gap-10 ">
                    <h1 className="mx-auto text-xl font-bold text-white">Current weather</h1>
                    <div className="border-2 w-5/6 md:w-3/6 mx-auto md:w-6/6 overflow-hidden h-auto md:h-auto rounded-xl">
                        <div className="grid h-full grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 ">
                            <div className="flex bg-gradient-to-b md:bg-gradient-to-r from-cyan-500 to-blue-500 flex-col py-3 text-slate-800 items-center">
                                <img className="w-24 mx-auto" src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="" />
                                     <div className="mx-auto font-semibold text-white">
                                    <p className="text-2xl text-white text-center my-2"><span className="font-bold text-black "></span>{data.current.temp_c} °C</p>
                                    <p><span className="font-bold text-gray-800  mr-2">City: </span>{data.location.name}, {data.location.country}</p>
                                    <p><span className="font-bold text-gray-800  mr-2">Condition: </span>{data.current.condition.text}</p>
                                </div>

                            </div>
                            <div className="flex bg-blue-500  flex-col items-center justify-center">
                                <h3 className="text-gray-800 font-bold underline decoration-dashed" >More info</h3>
                                <div className="mt-8 leading-8 text-white font-semibold">
                                    <p><span className="font-bold text-gray-800 mr-2">Date: </span> {data.location.localtime}</p>
                                    <p><span className="font-bold text-gray-800 mr-2">Wind speed: </span>{data.current.wind_kph} Km/h</p>
                                    <p><span className="font-bold text-gray-800 mr-2">Humidity: </span>{data.current.humidity}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="mx-auto text-md font-semibold text-white">Next 2 days</h1>
                    
                     <div className="flex last:mb-10 mx-auto gap-10 flex-col w-full md:flex-row md:w-4/6">
                        {(data.forecast.forecastday).map((el,index)=>
                            index!== 0 ? <ForecastDay key={index} date={el.date} tmp={el.day.avgtemp_c} conditionText={el.day.condition.text} conditionImg={el.day.condition.icon}  />  : null
                        )}
                    
                    </div>
                    
                    
                </div>
            </div> : null}
            <div class="md:fixed md:bottom-0 relative w-full text-center text-gray-400">
      <span>Made with ♥ by <a class="font-bold underline hover:text-cyan-500 transition-all" href="https://github.com/markorodriguez">Marko</a>.</span>
    </div>


        </div>
    )
}

export default App;