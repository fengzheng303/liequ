import { createStore, applyMiddleware} from 'redux';


import Reducer from './Reducer';
var Store=createStore(Reducer,applyMiddleware)
export default Store;