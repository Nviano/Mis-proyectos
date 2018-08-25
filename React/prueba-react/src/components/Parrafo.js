import React, { Component } from 'react';


class Parrafo extends Component {
    render() {
      return (
        <p>{this.props.text}</p>
      )
    }
  }
  Parrafo.defaultProps = {
    text: 'Props por defecto'
  }


  export default Parrafo;

  