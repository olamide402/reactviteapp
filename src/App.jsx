import Home from "./Home"
import About from "./About"
import Services from "./services"
import Contact from "./contact"
import Error from"./Error"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Loginform from "./loginform"
import Javascript from "./Javascript"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App(){
  return(
    <div className="app">
      <Router>
      <Navbar/>
      <Routes>


<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/services" element={<Services/>}/>
<Route path="/contact" element={<Contact/>} />
<Route path="jsone" element={<Javascript/>} />
<Route path="login" element={<Loginform/>} />
<Route path="*" element={<Error/>} />

</Routes>
<Footer/>
</Router>
    
    
  
    </div>
  )
}

export default App