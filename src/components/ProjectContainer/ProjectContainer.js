import React from 'react'
import Project from '../Project/Project';
import { Element } from 'react-scroll/modules'
import "./ProjectContainer.css";

const ProjectContainer = () => {
    const projects = [
        {
            img : 'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
            title : 'Calculator',
            desc : "The purpose of a calculator is to do correct calculations, and to do so efficiently.",
            link : "https://calculator-app.w3spaces.com/",
        },
        {
            img : 'https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg',
            title : 'Weather',
            desc : "Weather on Earth is caused by heat from the sun and movement of the air.",
            link : "https://weather-application.w3spaces.com/",
        },
    ];
  return (
    <Element className="projectContainer" id="projects">
        <h1>Projects</h1>
        <p>
            Here are some projects which I done for making lives of people easy.
        </p>
        <div className='projectContainer__projects'>
{
    projects.map((project,index)=>{
        return (
            <Project 
                key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
            />
        )
    })
}
        </div>
    </Element>
  )
}

export default ProjectContainer