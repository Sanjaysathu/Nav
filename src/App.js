import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Nav from './Nav';
import Menu from './Menu';
import Logo from './Logo';
import Features from './Features';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Nav />
        <Switch>

          <Route exact path='/'>  
            <Logo />  
          </Route>
          
          <Route path='/menu'> 
            <Menu />  
          </Route>

          <Route path='/about'>  
            <About />  
          </Route>

          <Route path='/features'>  
            <Features />  
          </Route>

          <Route path='/contact'> 
            <Contact />  
          </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
