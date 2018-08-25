import React, { Component } from 'react';
// import logo from './logo.svg';
// import Text from './components/Text';
// import Parrafo from './components/Parrafo';
// import H2 from './components/H2';
// import Condicional from './components/Condicional';
// import Contador from './components/Contador';
import Login from './components/Login';
import List from './components/List';
import AlumnosList from './components/AlumnosList';
import ToggleDisplay from 'react-toggle-display';
import './main.css';
import './App.css';


class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     mouseX: 0,
  //     mouseY: 0
  //   }
  // }
  constructor() {
    super();
    this.state = { show: false };
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    this.setState({mouseX:clientX, mouseY:clientY});
  }

  // handleClick(e){
  //   console.log(e)
  //   alert('Has hecho click');
  // }
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }


  render() {
    return (
      <div className="App">
        {/* <Login loginUsuario={true} />
        <List />
        <AlumnosList /> */}
       
        <ToggleDisplay show={this.state.show}>
        <button onClick={ () => this.handleClick() }>Que paza</button>
        </ToggleDisplay>
 
        <ToggleDisplay if={!this.state.show}>
          <button onClick={ () => this.handleClick() }>Primo</button>
        </ToggleDisplay>

        {/* <button onClick = {this.handleClick} className='mt-4'>Hello world</button>

        <div onMouseMove = {this.handleMouseMove} style={{ border: '1px solid #000', padding: '20px', width: '300px' }}>
          <p>{this.state.mouseX}</p>
          <p>{this.state.mouseY}</p>
        </div> */}

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Contador contadorInicial = {100}/>
        <Condicional/>
        <Parrafo  text= 'Esta props no es por defecto'/>
        <H2 nacho="El primo llega tarde" />
        <H2 title="El primo habla con el gordo master"
         />

        <Text

          arrayOfNumbers={[1, 2, 3]}
          arrayOfWords={["pepe", "negro"]}
          text="Texto del componente text"
          multiply={number => number * 2}
          words={letter => letter.slice(0, 2)}
          number={2}
          objectOfHeros={{ hero1: 'Flash', hero2: 'Batman', hero3: 'Superman' }}
          boolean={true}
          title = {<h1>Elemento enviado como prop</h1>}	
      
           /> */}


      </div>
    );
  }
}

export default App;
