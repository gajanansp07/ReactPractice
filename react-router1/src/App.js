import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Links from './Componant/Links';
import Login from './Componant/Login';
import Registraion from './Componant/Register';
import Home from './Componant/Home';
import About from './Componant/About-us';
import Contact from './Componant/Contact'

function App() {
  return (
    <div>
      <h1 style={{color:"red"}}>Welcome to SathyaTech</h1>
      <BrowserRouter>
      <Links />
      <Routes>
        <Route path='/Home' element={ <Home /> } /> 
        <Route path='/Register' element={ <Registraion /> } />
        <Route path='/Login' element={ <Login /> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Contact' element={ <Contact /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
