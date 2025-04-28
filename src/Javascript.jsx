import { useState } from "react"
import { FaLightbulb} from "react-icons/fa6"
import { MdNightlight } from "react-icons/md"

function Javascript(){
   
    const[text,setText]=useState("Welcome to learn coding solutions")

    const[textcolor,setTextcolor]=useState("black")

    const[backgroundColor,setBackgroundColor]=useState("white")


function handleclick(){
    setText(text=="welcome to learn coding solutions"?"You are in now.view exciting articles":"welcome to learn coding solutions")
    setTextcolor(textcolor=="black"?"white":"black")
    setBackgroundColor(backgroundColor=="white"?"black":"white")
    
}



    return(
        <div className="jsone" style={{background:backgroundColor}}>
              <h2 style={{color:textcolor}}>{text}</h2>



            <button onClick={handleclick}>click here</button>


            
        </div>
    )
}

export default Javascript