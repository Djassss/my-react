import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jas from '../video-img/jas.jpg'
import { HashLink } from 'react-router-hash-link';

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const AboutMe = () => {
  return(
    <>
    <div className='about'>
      <section className='section-1'>
          <div className='block-1'>
            <div className='block-1-text'>
              <h2>Hi. I'm Jasur</h2>
              <p>
                I'm web developer from Tashkent, 29 years old   
                I have been studying html, css, javascript, react on my own for
                2 years now. I really like writing code and am ready to work on real projects.
                I will be glad
              </p>
              <HashLink to={'#scroll'}><button>Get in touch</button></HashLink>
            </div>
          </div>
          <div className='block-2'>
            <img src={require('../video-img/zara1.jpg')}/>
          </div>
        </section>

        <section className='section-2' id='scroll'>
          <div className='bg-1'>
            <div className='bg-img-1'>
            </div>
          </div>

          <div className='bg-2'>
            <div className='bg-img-2'>
            </div>
            <div className='bg-img-3'>
            </div>
            <div className='bg-img-4'>
            </div>
          </div>
        </section>

        <section className='footer'>

        </section>
    </div>

   
    </>
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