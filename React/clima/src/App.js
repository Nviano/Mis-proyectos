import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

class App extends Component {

  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }
    
  }

  componentDidMount() {
    this.setState({
      error: false
    })
  }

  consultarApi = () => {
    const { ciudad, pais } = this.state.consulta;
    if (!ciudad || !pais) return null;
    
    // leer la url y agregar el API key
    const appId = '6f5ea3cffca6ac16e3bc6ef3bdec298f';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    console.log(url);

    //query con fetch api
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        this.setState({
          resultado: datos
        })
      })
      .catch(error => {
        console.log(error);
      })


  }

  datosConsulta = respuesta => {
    if (respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        consulta: respuesta,
        error: false
      })
    }
  }

  render() {

    const error = this.state.error;

    let resultado;

    if (error) {

      resultado = <Error mensaje="Ambos campos son obligatorios" />
    } else {
      resultado = <Clima resultado= {this.state.resultado}/>
    }

    


    return (
      <div className="app">
        <Header
          titulo='Clima React'
        />
        <Formulario
          datosConsulta={this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;
