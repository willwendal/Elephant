import { createStore } from 'redux';
import todos from '../reducers';

export const reduxStore = createStore(todos);
