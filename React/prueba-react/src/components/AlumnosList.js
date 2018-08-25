import React, { Component } from 'react';
import alumnos from '../data/alumnos.json';

class Alumno extends Component {
    render() {
        const {alumno,id} = this.props;
        return (
            <li id = {id}>
                <p>{alumno.name}</p>
                <p>{alumno.age}</p>
            </li>
        )
    }
}


class AlumnosList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {alumnos.map(alumno => {
                        return (
                            <Alumno id={alumno.id} key={alumno.id} alumno={alumno}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default AlumnosList
