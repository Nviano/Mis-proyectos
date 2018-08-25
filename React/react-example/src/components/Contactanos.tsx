"use strict";

import * as React from 'react';
import { Link } from "react-router-dom";

export const Contactanos: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <h1>Contacta con nosotros</h1>
           
            <div>
                <label>Deja tu mesanje:</label>
                <textarea id="exampleFormControlTextarea1" ></textarea>
            </div>
            <p><Link to="/">Back to Home</Link></p>
        </div>
    );
};

export default Contactanos;