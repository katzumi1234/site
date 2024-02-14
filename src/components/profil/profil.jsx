import"./profil.scss"
import {motion} from"framer-motion"

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.1,
     
      }
    }
}
const sliderVariants={
  initial:{
    x:0,
  },
  
    animate:{
      x:"-220%",
      transition:{
        duration:20,
        staggerChildren:0.1,
        repeatType:"mirror",
        repeat:Infinity,
     
      },
    }
}

const Profil = () => {
  return (
    <div className="profil">

 <motion.div className="pozitionare"
         initial={{opacity:0,scale:0.5}} 
         animate={{opacity:1,scale:1}} 
         transition={{duration:1}} >
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2  variants={textVariants}>Grigore Alexandru</motion.h2>
        <motion.h1  variants={textVariants}>Front-End Web Developer</motion.h1>
        <motion.div variants={textVariants} className="button">
               <motion.button variants={textVariants}>See the Latest Work</motion.button>
               <motion.button variants={textVariants}>Contact Me</motion.button>

            </motion.div>
        </motion.div>
</motion.div>
<motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingText">Front-End Developer </motion.div>
        <div className="imageContainer">
            <img className="border"src="/Profil.jpeg" alt="Profile"/>
        </div>
    </div>
  )
}
export default Profil;
