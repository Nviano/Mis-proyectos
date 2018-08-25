// Import libraries
import React, { Component } from 'react';
import { store } from '@Models';
import { connect } from 'react-redux';

///////////// Component ////////////////
class TextImp extends Component {

  render() {
    const text = store.getState()
    return (
      <div>
        <span>{this.props.nombre}</span>
        {/* <span>Bootcamp Codespace</span> */}
      </div>
    );
  }
}



const mapStateToProps = state => ({
  nombre: state.text,
});

export const Text = connect(mapStateToProps)(TextImp);
