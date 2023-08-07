import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './Testimonials.css';
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {

  const transition = {type: 'spring', duration: 3};
    
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const leftArrowMove = () => {
    selected === 0
        ? setSelected(tLength -1)
        : setSelected((prev) => prev -1);
  }

  const rightArrowMove = () => {
    selected === tLength - 1
        ? setSelected(0)
        : setSelected((prev) => prev +1);
  }

  return (
    <div className='Testimonials' id='testimonials'>
        <div className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'> what they</span>
            <span> say about us</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={{transition}}>
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span className='testimonials-name'>
                    {testimonialsData[selected].name} 
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className='right-t'>
            <div className='arrows'>
                <img onClick={leftArrowMove} src={leftArrow} alt="" />
                <img onClick={rightArrowMove} src={rightArrow} alt="" />
            </div>
            <motion.div
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{transition}}
            ></motion.div>
            <motion.div
             initial={{opacity: 0, x: 100}}
             whileInView={{opacity: 1, x: 0}}
             transition={{transition}}></motion.div>
            <motion.img
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={{transition}}
             src={testimonialsData[selected].image} alt="" />
            
        </div>
    </div>
  )
}

export default Testimonials