// Import libraries
import React, { Component } from 'react';
import { store } from '@Models';
import { connect } from 'react-redux';
import estilo from './products.css';
///////////// Component ////////////////
class Text2 extends Component {

  render() {
    const text = store.getState()
    return (
      <div>
        <span>{this.props.products.map((i, index) => (
          <li className={estilo.sinpunto} key={i.id}>{`${i.name}: ${i.price}€`}</li>
        ))}</span>
        {/* <span>Bootcamp Codespace</span> */}
      </div>
    );
  }
}



const mapStateToProps = state => ({
  products: state.products,
});

export const TextProduct = connect(mapStateToProps)(Text2);
