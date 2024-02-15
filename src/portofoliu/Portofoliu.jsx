import { useRef } from "react";
import "./portofoliu.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"


const items =[
    {
    id:1,
    title:"Project1",
    img:"./Proiect1.png",
    desc:"React Calculator"
},
{
    id:2,
    title:"Project2",
    img:"./Proiect1.png",
    desc:"React Calculator"
},
{
    id:3,
    title:"Project3",
    img:"./Proiect1.png",
    desc:"React Calculator"
},
{
    id:4,
    title:"Project4",
    img:"./Proiect1.png",
    desc:"React Calculator"
},
{
    id:5,
    title:"Project5",
    img:"./Proiect1.png",
    desc:"React Calculator"
},
];
const Single =({item})=>{

    const ref = useRef();
    const{scrollYProgress}=useScroll({target:ref,});

    const y = useTransform(scrollYProgress,[0,1],[-300,300])

    return(
    <section ref={ref}>
        <div className="container">
            <div className="pozitionare">
                <div className="imageContainer"> <img src={item.img}alt="Progect img"/> </div>
        <motion.div style={{y}} className="textContainer" >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
        </motion.div>
        </div>
        </div>
    </section>
)}


const Portofoliu = () => {

    const ref = useRef();

    const{scrollYProgres}=useScroll({target:ref, offset:["end end","start start"],})

const scaleX= useSpring(scrollYProgres,{
    stiffness:100,
    damping:30,
});

  return (
    <div className="portofoliu" ref={ref}>
        <div className="progres">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }}className="progresBar"></motion.div>
        </div>
{items.map(item=>(
    <Single item={item}key={item.id}/>
))}

    </div>
  )   
}
export default Portofoliu