import React, { Component } from 'react';



class List extends Component {
    render() {
        const coches = ['Audi', 'Audi', 'Seat', 'Ford', 'Mercedes']
        return (
            coches.map((coche,index) => {
               return <p key = {index}>Soy la marca {coche}</p>
            })
        )
    }
}
export default List
