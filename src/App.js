import React from 'react';
import './styles/App.scss';
import Header from './components/header';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/experience';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
        <div className='App'>
          <Header/>
          <Navbar/>
          <About/>
          <Experience/>
        </div>
      
  );
}

export default App;
