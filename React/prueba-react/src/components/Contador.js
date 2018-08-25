import React, { Component } from 'react';
import ContadorNumero from './ContadorNumero';

class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: this.props.contadorInicial }
        setInterval(() => {
            this.setState({ contador: this.state.contador + 1 })
        }, 1000)
    }

    render() {

        return (
            <ContadorNumero contador = {this.state.contador} />

        )
    }
}
Contador.defaultProps = {contadorInicial:0}

export default Contador;
