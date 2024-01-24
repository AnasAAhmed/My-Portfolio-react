import React from 'react'
import {  motion } from "framer-motion";
import { MdOutlineWeb } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";

const Services = () => {
  
const animations ={
     whileInview:{ 
        x:0, 
        y:0,
        opacity:1
     },
     one:{ 
        opacity:0,
        x:"-100%"
     },
     two_three:{ 
        opacity:0,
        y:"-100%"
     },
    
     four:{ 
        opacity:0,
        x:"+100%"
     }

}




  return (
    <div className='to'> 

    <div id='services'>
      <h2>Services</h2>
      <section> 
        <motion.div 
         className='servicebox1' 
         
          whileInView={animations.whileInview} 
          initial={animations.one}
        > 
        <h3>4+</h3>
        <p>Months Experience</p>
        </motion.div>
        <motion.div  
        className='servicebox2'  
        
        whileInView={animations.whileInview} 
        initial={animations.two_three}
        > 
        <FaReact/>
        <span>React-Js UI/UX</span>
        </motion.div>
        <motion.div 
         className='servicebox3' 
          whileInView={animations.whileInview} 
          initial={animations.two_three}
          transition={{delay:0.2}}
          > 
        <MdOutlineWeb />
        <span>Web Development</span>
       
        </motion.div>
        <motion.div  
        className='servicebox4' 
        whileInView={animations.whileInview} 
        initial={animations.four}
        > 
        <RiReactjsLine/>
        <span>Beginner with (Back-end)</span>
       
        </motion.div>
      </section>
    </div>
        </div>
  )
}

export default Services
