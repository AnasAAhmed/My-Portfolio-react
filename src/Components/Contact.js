import React, { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc,collection} from 'firebase/firestore';
import {db} from '../server';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setDisableBtn(true);
   try {
    await addDoc(collection(db,"messages"),{ 
      name,
      email,
      message
    });
    setMessage("");
    setEmail("");
    setName("");
    toast.success("Message Sent");
    setDisableBtn(false);

   } catch (error) {
    toast.error("error");
    console.log(error);
    setDisableBtn(false);

   }
  };

  const anime = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0
      },
      whileInView: {
        x: "0",
        opacity: 1
      },
      transition:{ 
        duration: 0.3,
        
      }
      
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0
      },
      whileInView: {
        y: "0",
        opacity: 1
      },
      transition: {
        delay: 0.5
      }
    }
  }
  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...anime.form} >
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button
          disabled={disableBtn}
          className={disableBtn?"disablebtn":""}
            {...anime.button}
            type="submit"
          >
            Send
          </motion.button>
    
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;