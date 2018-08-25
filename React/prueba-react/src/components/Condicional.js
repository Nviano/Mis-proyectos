import React, { Component } from 'react';

class ComponenteA extends Component {
   render() {
       return (
           <p>Componente A</p>
       )
   } 
}

class ComponenteB extends Component {
   render() {
       return (
           <p>Componente B</p>
       )
   } 
}

// function mostrar(mostrar) {
//     if (mostrar) {
//         return <ComponenteA />
//     }
//     return <ComponenteB />
// }



class Condicional extends Component {
    constructor() {
        super()
        this.state = { mostrarA: true }
    }
   render() {
    // const mostrarComponente = (this.state.mostrarA)
    // ? <ComponenteA />
    // : <ComponenteB />

       return (
           <div>
               <h4>Renderizado condicional</h4>
               {this.state.mostrarA
                    ? <ComponenteA />
                    : <ComponenteB />}

               {/* <ComponenteA />
               <ComponenteB /> */}
               {/* {mostrar(this.state.mostrarA)} */}
               {/* {mostrarComponente} */}
           </div>
       )
   }
}

export default Condicional;