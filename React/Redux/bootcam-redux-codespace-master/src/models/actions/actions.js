export const changeText = (payload) => ({
  payload,
  type: 'CHANGE_TEXT',
});

export const deleteText = () => ({
  payload: null,
  type: 'DELETE_TEXT',
});

export const changeAction = payload => ({ payload, type: 'CHANGE_TEXT' });

export const addProduct = payload => ({ payload, type: 'ADD_PRODUCT' });

