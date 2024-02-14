import { useRef } from "react"
import"./prezentare.scss"
import {motion, useScroll,useTransform} from"framer-motion"


const Prezentare = ({type}) => {

    const ref = useRef()


const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start","end start"],
   });
const ytext = useTransform(scrollYProgress, [0,1], ["0%","100%"])
const ybg = useTransform(scrollYProgress, [0,1], ["0%","100%"])

// ,backgroundImage:`url(${type==="servici"?"/planets.png":"sun.png"})`

  return (
    <div className="prezentare" ref={ref} style={{background:type==="servici"?"linear-gradient(180deg,#111132,#0c0c1d)":"linear-gradient(180deg,#111132,#505064)"}}>
        <motion.h1 style={{y:ytext}}>{type==="servici"? "What We Do ?":"What We Did?"}</motion.h1>
        <motion.div className="munti"></motion.div>
        <motion.div className="planete" style={{y:ybg}}></motion.div>
        <motion.div style={{x:ybg}}className="stele"></motion.div>
    </div>
  )
}
export default Prezentare;