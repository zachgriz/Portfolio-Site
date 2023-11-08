import React from 'react';
import './styles/App.scss';
import Header from './components/header';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/experience';
import Socials from './components/socials';
import ContactForm from './components/contactForm';

function App() {
  return (
        <div className='App'>
          <Header/>
          <Navbar/>
          <About/>
          <Socials/>
          <Experience/>
          <ContactForm/>
        </div>
      
  );
}

export default App;
