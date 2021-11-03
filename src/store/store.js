import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger'
import reducer from './reducer.js';

// import monitorReducerEnhancer from './monitorReducer';
const round = number => Math.round(number * 100) / 100

const monitorReducerEnhancer =
  createStore => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      const start = performance.now()
      const newState = reducer(state, action)
      const end = performance.now()
      const diff = round(end - start)
      console.log('reducer process time:', diff)
      return newState
    }
    return createStore(monitoredReducer, initialState, enhancer)
  }

// export default monitorReducerEnhancer

const middlewares = [thunkMiddleware, logger];


const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  monitorReducerEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(reducer, undefined, storeEnhancers);

export default store;