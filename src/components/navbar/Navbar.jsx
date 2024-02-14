import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from"framer-motion"


const Navbar = ()=>{
    return(
    <div className="navbar">
        <Sidebar/>   
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} 
                         animate={{opacity:1,scale:1}} 
                         transition={{duration:1}} >Alex Dev.</motion.span>
            <div className="links">
                <a href="#"><img src="/github.svg"alt="github"/></a>
                <a href="#"><img src="/linkedin.svg"alt="linkedin"/></a>
            </div>
        </div>
    </div>
    
    )
}

export default Navbar