import { initialRootState as initial } from './root.state';
import { RootStateTypes as State } from './root.types';
import { Action } from '@Models';

export function rootReducer(state: State = initial, action: Action): State {
  switch(action.type) {
    case 'PRODUCT_SUCCESS':
    return {
      ...state,
      category:action.payload,
      categoryError:null
    }
    case 'PRODUCT_ERROR':
    return {
      ...state,
      category:null,
      categoryError:action.payload
    }
  }
}
