import React from "react";
import {time} from "../assets/data";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
const Timeline = () => {

    return (
        <div id="timeline">

            <div className="timelineBox">
                {time.map((item, index) => (
                    <TimelineItem
                        heading={item.titled}
                        text={item.date}
                        index={index}
                        key={item.titled}
                    />
                ))}
            </div>      
            <div className="psvg"> 

            <BsChevronDown  color="black" size="3rem"/>
            </div>
        </div>
    );
};

const TimelineItem = ({ heading, text, index }) => {

    const animations = {
        h1: {
            initial: {
                y: "+100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition:{
                duration:0.5,
                delay:0.2
            },
        }
    }
    return (
        <div
            className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"
                }`}
        >
            <motion.div {...animations.h1} >

                <h4>{heading}</h4>
                <p>{text}</p>
            </motion.div>
        </div>
    )
}

export default Timeline;


