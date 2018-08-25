import { createStore,applyMiddleware } from 'redux';
import { allReducer } from '@Models';

export const store = createStore(allReducer, [])


