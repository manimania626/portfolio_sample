import React from 'react'
import { IconButton } from '@material-ui/core'
import {Facebook, Instagram, LinkedIn} from "@material-ui/icons";
import "./Contact.css";
import { Element } from 'react-scroll/modules';

const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>manimania6264@gmail.com</span>
            </p>
            <p>
                GitHub Username : <span>@manimania6264</span>
            </p>
            <div className='contact__icons'>
                <a href="www.google.com">
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>
                <a href="www.google.com">
                    <IconButton>
                        <Facebook />
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/manimania6264/">
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact