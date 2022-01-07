import React from "react";
import searchImg from "../Assets/search.png"

const Search = (props) =>{
    return(
        <div className="container my-16 mx-auto" >
                 <div className="flex flex-col md:flex-row mx-auto items-center justify-center" >
                     <div>
                     <span className="flex mx-auto items-center justify-center">
                        <img className="h-6 w-auto inline-block" src={searchImg} alt="search_icon" />
                         <input className="shadow-xl border-2 transition-all inline-block mx-6 hover:ring hover:ring-cyan-500 p-1 rounded-xl focus:outline-none focus:shadow-2xl focus:ring focus:ring-cyan-500" onChange={(e)=>{props.setValue(e.target.value)}} type="text" name="buscador" id="buscador"  placeholder="Type your city..."/>
                     </span>
                     </div>
                     <button onClick={props.handleForm} className="transition-all border-2 my-6 px-4 py-1 rounded-xl text-white font-semibold hover:border-cyan-500 active:bg-cyan-800" >Let's see!</button>
                 </div>    
             </div>
    )
}

export default Search