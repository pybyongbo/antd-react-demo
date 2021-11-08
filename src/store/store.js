import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger'
// import reducer from './reducer.js';

// 单个reducer 写法:
import creducer from './reducer';

// 多个reducer 写法:
import TodolistReducer from './TodoListReducer/index.js';

// 使用该方法合并两个reducer
const rootReducer = combineReducers({
  connecttodolist: creducer,
  todolist: TodolistReducer,

  // UserReducer
});


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


const middlewares = [thunkMiddleware, logger];


const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  monitorReducerEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(rootReducer, undefined, storeEnhancers);

export default store;