import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../video-img/3.png'

const MyHome = () => {
  return(
    <div className='home'>
      <video src={require('../video-img/pexels-dario-fernandez-ruz-9130080.mp4')} muted autoPlay loop />
      <div className='overlay'></div>
          <h2>jasur umarovv</h2>
          <h3>web developer</h3>
    </div>
  )

}




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
//       <div className='class' style={{background: this.state.color}}>
//         <h1>
//           Change my color
//         </h1>
//         <button onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }













class Home extends React.Component  {
  render() {
  return (
    <>
    <MyHome />
    {/* <Toggle /> */}
    </>
  )
}
}


export default Home;