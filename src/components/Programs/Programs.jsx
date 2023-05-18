import React from 'react'
import './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
export const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className='programs-header'>
            <span>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="programs-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now <img src={RightArrow} alt="" /></span></div>
                </div>
            ))}
        </div>
    </div>
  )
  
}

