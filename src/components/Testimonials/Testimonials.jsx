import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData';
import leftArrows from '../../assets/leftArrow.png';
import rightArrows from '../../assets/rightArrow.png';

export const Testimonials = () => {

    const [selected , setSelected] = useState(0);
    const tLength = testimonialsData.length;

  return (
    <div className="Testimonials">
        <div className="left-t">
            <span>Testimoials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>
                {testimonialsData[0].review}
            </span>
            <span>
                <span style={{color: 'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img
                onClick={()=>{
                    selected ===0
                    ? setSelected(tLength - 1)
                    : setSelected((prev)=>prev - 1);
                }}
                 src={leftArrows} alt="" />
                <img
                onClick={()=>{
                    selected === tLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                 src={rightArrows} alt="" />
            </div>
        </div>
    </div>
  )
}
