import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jas from '../video-img/jas.jpg'

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const AboutMe = () => {
  return(
    <div className='about'>
      <video src={require('../video-img/dfa733af-d7abd669.mp4')} muted autoPlay loop />
      <div className='overlay'></div>

      <div className='me'> 
        <div className='photo'>
        <h3 className='skills'>my skills</h3>
          {/* <img src={jas} className='img' /> */}
          <div className='html'><span>Html  </span></div>
          <div className='css'><span>Css/scss  </span></div>
          <div className='js'><span>javaScript  </span></div>
          <div className='react'><span>React </span></div>
        </div>

        <div className='text'>
          <h3>
            hey I'm Jasur
          </h3>
          <p>
          The is a long established fact that 
          a reader will be
          distracted by the readable content
          of a page when looking at its layout.
          The point of using Lorem Ipsum is that 
          it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here',
          of a page when looking at its layout.
          The point of using Lorem Ipsum is that
          it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here',
          </p>
        </div>
      </div>

  </div>
  )
}


const About  = () => {
return (
  <>
   <AboutMe />
  </>
)
}

export default About;