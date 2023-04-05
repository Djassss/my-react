import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faReact, faTelegram, faGoogle, faSteam, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  return(
    <div className='contact'>
      <video src={require('../video-img/pexels-lachlan-ross-8775687.mp4')} muted autoPlay loop />
      <div className='overlay'></div>
      {/* <h1>jasur Umarov</h1> */}
  </div>
  )
}

function Btn () {
  return (
    <>
    </>
  )
}



function Myinfo () {
  return (
    <div className='myinfo'>
      <div className='info'>
        <p><FontAwesomeIcon icon={faEnvelope}/> jasurumarov.94@gmail.com </p>
        <p><FontAwesomeIcon icon={faPhone} /> <span> Phone number</span> +99890 925 13 31</p>
        <p><FontAwesomeIcon icon={ faTelegram} /><span> Telegram</span> @djassss1</p>
      </div>
      <div className='social'>
        <FontAwesomeIcon className='i'  icon={faWhatsapp}/>
        <FontAwesomeIcon className='i'  icon={faTelegram}/>
        <FontAwesomeIcon className='i'  icon={faGoogle}/>
        <FontAwesomeIcon className='i'  icon={faSteam}  />
      </div>
    </div>
  )
}











///////////////////////////////////////////////////////////////////////////////





function Car (props) {
  return <h2>I'm a car {props.brand.model} </h2>
}

function Garage () {
  const carInfo  = {name: 'Ford', model: 'Mustang'};
  return (
    <div>
      <h1>Who is lives my Garage?</h1>
      <Car brand={carInfo}/>
    </div>
  )
}




function Football () {
  const shoot = () => {
    alert('Great shoot')
  }
  return (
    <button onClick={shoot}>Take the shoot</button>
  )
}







const Contact = () => {
  return (
    <>
    <AboutMe />
    <Myinfo />
    </>
  )
}

export default Contact;

