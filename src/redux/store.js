import {createStore, applyMiddleware} from "redux";
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from '@redux-devtools/extension'
import rootReducer from './reducers/rootReducer'

export const store = composeWithDevTools(applyMiddleware(thunk))(createStore)(rootReducer);

