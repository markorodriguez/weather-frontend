import React from "react";

const ForecastDay = (props) => {
    return (
        <div className="border-2 w-5/6 mx-auto md:w-6/6 overflow-hidden h-auto md:h-auto rounded-xl">
           
                <div className="flex bg-gradient-to-b md:bg-gradient-to-r from-cyan-500 to-blue-500 flex-col py-3 text-slate-800 items-center">
                    <img className="w-24 mx-auto" src={props.conditionImg} alt="icon_condition" />
                    <div className="mx-auto font-semibold text-white">
                        <p className="text-2xl text-white text-center my-2"><span className="font-bold text-black "></span>{props.tmp} °C</p>
                        <p><span className="font-bold text-gray-800 mr-2">Date: </span> {props.date}</p>
                        <p><span className="font-bold text-gray-800  mr-2">Condition: </span>{props.conditionText}</p>
                    </div>
                </div>
        </div>
    );
};

export default ForecastDay;
