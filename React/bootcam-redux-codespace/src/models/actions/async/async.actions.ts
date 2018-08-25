
const getProductSuccess = payload => ({ payload, type: 'PRODUCT_SUCCESS' })
const getProductError = payload => ({ payload, type: 'PRODUCT_ERROR' })


export const getProduct = () => async dispatch => {
  try{
    const res = away fetch('http://localhost3000/products').then(res => res.json());
    dispatch({ type: 'SUCCESS', payload: res });
    }
 

      dispatch({ type: 'ERROR', payload: err });

}
