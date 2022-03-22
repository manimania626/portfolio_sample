import React from 'react'
import { Link } from 'react-scroll/modules'
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent_container'>
            <h1>Mr. MANIKANDAN A</h1>
            <p>Programmer...</p>
            <a href='https://drive.google.com/file/d/1lrr9F8JY9q-Frr-guT3ZaBYuaRtiSMCA/view' target="_blank">
                <button className='topContent__donwloadButton'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent__workButton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent