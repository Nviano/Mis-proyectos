import React, { Component } from 'react';
import OptionSelect from './OptionSelect';


class Formulario extends Component {

    monedaRef =React.createRef();
    cryptoRef = React.createRef();

    cotizarMonedas = (e) => {
        e.preventDefault();

        //crear el objeto
            const cotizacion = {
                moneda: this.monedaRef.current.value,
                crypto:this.cryptoRef.current.value
            }
           

        //enviar por props
        this.props.obtenerValoresCrypto(cotizacion);
    }

    render() {
        return (
            <form onSubmit={this.cotizarMonedas}>
                <div className="form-group">
                    <label>Monedas:</label>
                    <select ref={this.monedaRef} className="form-control">
                        <option value="" disabled defaultValue>Elige tu moneda</option>
                        <option value="USD">Dolares</option>
                        <option value="EUR">Euros</option>
                        <option value="GBP">Libras</option>
                        <option value="MXN">Peso Mexicano</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>CryptoMoneda</label>
                    <select ref={this.cryptoRef} className="form-control">
                        {Object.keys(this.props.monedas).map(key => (
                            <OptionSelect
                                key={key}
                                moneda={this.props.monedas[key]}
                            />
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar" />
                </div>
            </form>
        );
    }
}

export default Formulario;