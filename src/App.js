import React from 'react';
import './styles/App.scss';
import Header from './components/header';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
        <div>
          <Header/>
          <Navbar/>
          <About id="about"/>
          <div className='socials'>
            <a href="https://www.linkedin.com/in/zach-griswold/">
              <FontAwesomeIcon icon={faLinkedin} className='icon'/>
            </a>
            <a href="https://github.com/zachgriz">
              <FontAwesomeIcon icon={faGithubSquare} className='icon'/>
            </a>
            <a href='mailto:zachgrizzly@gmail.com?subject=Contact via Portfolio'>
              <FontAwesomeIcon icon={faEnvelopeSquare} className='icon'/>
            </a>
          </div>
          <Experience/>
        </div>
      
  );
}

export default App;
