

export function reducer(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.payload,
      };
    case 'DELETE_TEXT':
      return {
        ...state,
        text: action.payload,
        products: [],
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state

  }
}


