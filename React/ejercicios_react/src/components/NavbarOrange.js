import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../index.css';

class NavbarOrange extends Component {
    render() {
        return (
            <div>
                <Navbar defaultExpanded className="orange">
                    <p>esto es una prueba de react</p>
                    
                </Navbar>

            </div>

        )
    }
}





    export default NavbarOrange;