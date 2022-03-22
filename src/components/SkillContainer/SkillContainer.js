import React from 'react'
import {Element} from "react-scroll"
import skillimg from "../../assests/skill.jpg";
import {LinearProgress} from '@material-ui/core';
import "./SkillContainer.css";


const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
        <div className='skillContainer__image'>
            <img src={skillimg} alt="Skill Image" />
        </div>
        <div className='skillContainer_text'>
          <h2>SKILLSET</h2>
          <div className='skillContainer__skillSet'>
            <h5>Java</h5>
            <div className='skillContainer__slider skillContainer__slider1'>
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className='skillContainer__skillSet'>
            <h5>SQL</h5>
            <div className='skillContainer__slider skillContainer__slider2'>
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className='skillContainer__skillSet'>
            <h5>JavaScript</h5>
            <div className='skillContainer__slider skillContainer__slider3'>
              <LinearProgress variant="determinate" value={75} />
            </div>
          </div>
          <div className='skillContainer__skillSet'>
            <h5>HTML/CSS</h5>
            <div className='skillContainer__slider skillContainer__slider4'>
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
        </div>
    </Element>
  )
}

export default SkillContainer