import React from 'react';
import './styles/App.scss';
import Header from './components/header';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/experience';
import Socials from './components/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
        <div>
          <Header/>
          <Navbar/>
          <About/>
          <Socials/>
          <Experience/>
        </div>
      
  );
}

export default App;
