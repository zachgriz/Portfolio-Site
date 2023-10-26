import React from 'react';
import './styles/App.scss';
import Header from './components/header';
import Navbar from './components/navbar';
import About from './components/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Header/>
          <Navbar/>
          <Routes>
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
      
  );
}

export default App;
