import "./servici.scss"
import { useRef } from "react"
import {motion, useInView} from"framer-motion"

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
         duration:1,
            staggerChildren:0.1,

        }
    }
}
const Servici = () => {

    const ref = useRef();
    const isInView= useInView(ref,{margin:"-100px"});
  return (
    <motion.div className="servici" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <motion.p>I focus on helping your business grow <br/> and move forward</motion.p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants} >
        <div className="title"><img src="./About.png" alt="About-img"/>
        <h1><b>Many</b> Ideas</h1></div>
       <div className="title"><h1><b>For Your</b> Business.</h1></div> 
       <button className="button">WHAT I CAN DO?</button>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>

        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}><h2>Titlu</h2>
        <p>I am confident in my abilities to handle myself in any situation</p>
        <button>Go</button></motion.div>


        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}><h2>Titlu</h2>
        <p>I am confident in my abilities to handle myself in any situation</p>
        <button>Go</button></motion.div>

        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}><h2>Titlu</h2>
        <p>I am confident in my abilities to handle myself in any situation</p>
        <button>Go</button></motion.div>
      

        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}><h2>Titlu</h2>
        <p>I am confident in my abilities to handle myself in any situation</p>
        <button>Go</button></motion.div>
      

      </motion.div>
    </motion.div>
  )
}

export default Servici
