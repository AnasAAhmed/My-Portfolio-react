import React,{useRef} from "react";
import {  motion ,animate} from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

import de from "../assets/png.png"


const Home = ({ratio}) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(100, 0, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(500, 15, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    img: {
      initial: {
        y: "+100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition:{
        duration:0.4,
        delay:0.3
      }
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Anas Ahmed
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              cursor: "",
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />

<motion.div {...animations.img}>
            <a href="mailto:anasahmedd224@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </motion.div>

          <article>
            <p>
              +
              
                
                { 
                ratio < 2 && ( 
                  <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
                )
                }
             
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +
               
                  { 
                  ratio < 2 && ( 
                    <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    
                  </motion.span>
                  )
                  }
               
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>anasahmedd244@gmail.com</span>
            </article>
          </aside>
          
        </div>
      </section>
      <motion.section{...animations.img}>
        <img src={de} alt="Anas"  
        />
      </motion.section>
     <a href="#contact"> <BsChevronDown  /></a>
    </div>
  );
};

export default Home;
