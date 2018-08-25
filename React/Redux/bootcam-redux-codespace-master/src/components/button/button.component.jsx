// Import libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Import global resources
import { changeAction } from '@Models'
// Import local resources
import styles from './button.styles.css';
import { connect } from 'react-redux';

///////////// Component ////////////////

export class ButtonImp extends Component {

  handleClick = () => {
    this.props.action('buenos dias!')
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
    action: changeAction,

  }, dispatch);

export const Button = connect(mapStateToProps, mapDispatchToProps)(ButtonImp);
