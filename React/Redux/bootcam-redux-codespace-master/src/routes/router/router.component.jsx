// Import libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Import global resources
import { store, changeText, deleteText } from '@Models';
import { logo } from '@Assets';
import { Text, Button, ButtonProduct, TextProduct } from '@Components';

// Import local resources
import styles from './router.styles.css';


///////////// Component ////////////////
export class Router extends Component {
  handdleStore = () => {
    // console.log('Click ver store');
    console.log(store.getState());
  };

  handdleDispatch = () => {
    // console.log('Click Lanzar accion');
    store.dispatch(changeText('hola q tal'));
  };
  handdleDispatch2 = () => {
    store.dispatch(deleteText());
    console.log('Borrar Accion');


  };

  render() {
    store.subscribe(() => {
      console.log('el store cambia');
    });
    return (
      <Provider store={store}>
        <div className={styles.container}>
          <img src={logo} className={styles.image} />
          <h1 className={styles.title}>Bootcamp CodeSpace - Redux</h1>
          <div className={styles.subContainer}>
            <a onClick={this.handdleStore} className={styles.button}>
              Ver el Store
          </a>
            <Button >Lanzar Accion</Button>
            <ButtonProduct >Add Productos</ButtonProduct>
            <a onClick={this.handdleDispatch2} className={styles.button}>
              Borrar Accion
          </a>
          </div>
          <div className={styles.text}>
            {/* <Text /> */}
            <Text />
            <TextProduct />
          </div>
        </div>
      </Provider>
    );
  }
}
