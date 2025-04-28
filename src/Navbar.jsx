import { Link } from "react-router-dom"
import { FaLightbulb} from "react-icons/fa6"
import { MdNightlight } from "react-icons/md"
import { useState } from "react"




function Navbar(){

    const [mode,setMode]=useState("white")
    const[modecolor,setModecolor]=useState("")

    function handlemode(){
        setMode(mode=="white"?"red":"white")
        

    }



    return(
        <div className="navbar">
            <h3>logo</h3>
        
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/services" className="link">Services</Link>
            <Link to="/contact" className="link">Contact</Link>
            <button onClick={handlemode} style={{background:mode,color:modecolor}}>Change color</button>
           
           </div>
        
    )
}

export default Navbar