import React from "react"

const Navbar = () => {
    return(
        <nav className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="container h-4/6 py-4 mx-auto flex justify-between">
                <span className="text-lg text-white font-bold mx-4 md:mx-0">My Weather App</span>
            </div>
            
        </nav>
    )
}

export default Navbar;