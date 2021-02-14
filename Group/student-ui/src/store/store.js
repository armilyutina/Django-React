import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import rootReducer from '../reducers/rootReducer'


const middleware = [thunk]


const composeEnhancers = 
    (typeof window !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null )||compose;


const store = createStore(  
    rootReducer, 
    undefined,
    composeEnhancers(applyMiddleware(...middleware))
)


export default store;