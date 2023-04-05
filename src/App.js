import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

import './style/app.scss';
import './style/header.scss';
import './style/about.scss';
import './style/contact.scss';
import './style/home.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<h1>Page not found 404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
