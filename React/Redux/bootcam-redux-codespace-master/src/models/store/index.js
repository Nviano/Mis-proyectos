export * from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { allReducers } from '@Models';
import { createStore, applyMiddleware } from 'redux';


const logger = createLogger({
  collapsed: true,
});

const allMiddelware = composeWithDevTools(applyMiddleware(logger));

export const store = createStore(allReducers, {}, allMiddelware);



