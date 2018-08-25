// Import libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Import global resources
import { addProduct } from '@Models';

// Import local resources
import styles from './button.styles.css';
import { connect } from 'react-redux';

///////////// Component ////////////////
export class Button2 extends Component {

  handleClick = () => {
    var products = [{ id: 1, price: '300', name: 'Moto' }, { id: 2, price: '1000', name: 'Coche' }, { id: 3, price: '200', name: 'Patinete' }]
    this.props.action(products);
  }

  render() {
    return (
      <a onClick={this.handleClick} className={styles.button}>
        {this.props.children}
      </a>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  // action: (payload) => dispatch({ payload, type: 'CHANGE_TEXT' }),
  bindActionCreators({
    action: addProduct,

  }, dispatch);

export const ButtonProduct = connect(mapStateToProps, mapDispatchToProps)(Button2);
