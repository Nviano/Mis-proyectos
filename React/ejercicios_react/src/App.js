import React, { Component } from 'react';
import './App.css';
import './index.css';
import Navbar1 from './components/Navbar';
import NavbarOrange from './components/NavbarOrange';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavbarOrange className="orange"/>
      <Navbar1/>
      
        
      </div>
    );
  }
}

export default App;
