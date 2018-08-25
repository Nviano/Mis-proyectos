import React, { Component } from 'react';



class H2 extends Component {
    render() {
      return (
        <h2 className="blue">{this.props.title}{this.props.nacho}</h2>
      )
    }
  }


  export default H2;
