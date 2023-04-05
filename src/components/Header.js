import { faAddressCard, faBars, faHome, faHomeUser, faInbox, faL, faPhone, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container } from 'react-dom';
import { Center, Render, LeftRightSection } from 'react-containers';
import { faReact, faTelegram, faGoogle, faSteam, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// const green = '#39D1B4';
// const yellow = '#FFD712';

// class Toggle extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {color: green}
//     this.changeColor = this.changeColor.bind(this);
//   }
//   changeColor() {
//     const newColor = this.state.color == green ?
//     yellow : green;
//     this.setState({color: newColor});
//   }
//   render() {
//     return (
//       <div style={{background: this.state.color}}>
//         <h1>
//           Change my color
//         </h1>
//         <button onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }





const MyHeader = () => {
  const [toggle, setToggle] = useState(false);

return(
  <>
<header>
    {/* <FontAwesomeIcon className='icn' icon={faBars} onClick={() => setToggle(!toggle)} /> */}

    {/* <img src={require('../video-img/16.jpg')}/> */}
    <h2><Link to={'/'}>Logo</Link></h2>
    <div className='menu'>
        <Link to={'/'} > Home</Link>
        <Link to={'/about'} > About</Link>
        <Link to={'/contact'} > Contact</Link>
    </div>
</header>


{toggle && (
  <div className='sidebar '>
    <ul className='social-media'>
      <li className='social-blog'><Link className='blog-link'>
      <FontAwesomeIcon className='i' icon={faWhatsapp}/></Link></li>
      <li className='social-blog'><Link className='blog-link'>
      <FontAwesomeIcon className='i' icon={faTelegram}/></Link></li>
      <li className='social-blog'><Link className='blog-link'>
      <FontAwesomeIcon className='i' icon={faGoogle}/></Link></li>
      <li className='social-blog'><Link className='blog-link'>
      <FontAwesomeIcon className='i' icon={faSteam}/></Link></li>
    </ul>
    <ul className='nav'>
      <li className='nav-li'>
        <Link><FontAwesomeIcon className='i' icon={faHome} />Home</Link>
      </li>
      <li className='nav-li'>
        <Link><FontAwesomeIcon className='i' icon={faAddressCard} />about</Link>
      </li>
      <li className='nav-li'>
        <Link><FontAwesomeIcon className='i' icon={faPhone} />contact</Link>
      </li>
    </ul>
  </div>
  )}
</>
  )
}

const SideBar = () => {
  return (
  <>
   
  </>
  )
}















const Header = () => {
  const [side, setSide] = useState(false);

  return (
    <>
      <MyHeader />
    </>
  )
}

export default Header;