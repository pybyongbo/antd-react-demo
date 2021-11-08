import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
  CHANGE_TODO_ITEM_STATUS,
  SET_VISIBILITY_FILTER,
  GET_ARTICLE_LIST,
  GET_NEWS_LIST
} from '../actionType';

let initialState = {
  inputValue: '',
  list: [],
  artileList: [],
  newsList: []
};

export default (state = initialState, action) => {


  const { payload } = action;


  if (action.type === CHANGE_INPUT_VALUE) {

    /**方法1: */
    // const newState = JSON.parse(JSON.stringify(state));
    // newState.inputValue = action.value;
    // return newState

    /**方法2: */
    // return Object.assign({},state,{
    //     inputValue:action.value
    // });
    // console.log('result', state)
    // console.log({ ...defaultState, inputValue: action.value });
    // debugger
    return { ...state, inputValue: action.value }
  }

  if (action.type === ADD_TODO_ITEM) {


    // const newState = JSON.parse(JSON.stringify(state));
    // newState.list.push(newState.inputValue);
    // newState.inputValue = ''; //清空文本框的值;
    // return newState

    // console.log({ ...state });

    const newState = { ...state };
    // console.log('result newState',action)
    // debugger
    newState.list.push({
      status: false,
      content: state.inputValue,
      timeStamp: new Date().getTime()
    });
    // debugger
    newState.inputValue = ""; //提交后清空文本框的值.
    newState.list.sort((a,b)=>b.timeStamp-a.timeStamp);

    return { ...newState }
  }
  if (action.type === DEL_TODO_ITEM) {
    // const newState = JSON.parse(JSON.stringify(state));

    const newState = { ...state };
    newState.list.forEach((item, index) => {
      // console.log(action);
      if (item.timeStamp === action.obj.timeStamp) {
        newState.list.splice(index, 1)
      }
    })
    return newState
  }


  if (action.type === CHANGE_TODO_ITEM_STATUS) {

    console.log('result action', action);
    const newState = { ...state };
    newState.list.forEach((item, index) => {
      if (item.timeStamp === action.obj.timeStamp) {
        newState.list[index].status = action.value;
      }
    });
    // console.log('result 111', newState);
    // action.obj.status = action.value;
    // console.log('result newState',newState)
    return newState


  }

  if (action.type === SET_VISIBILITY_FILTER) {

    // console.log('result val', action.value);
    const newState = { ...state };
    // debugger
    // switch (action.value) {
    //   case 0:
    //     return newState;
    //   case 1:
    //     debugger
    //     // return {
    //     //   ...newState,
    //     //   list: newState.list.filter((item, index) => {
    //     //     return item.status === true
    //     //   })
    //     // };
    //     return Object.assign({}, newState, {
    //       list: newState.list.filter((item, index) => {
    //         return item.status === true
    //       })
    //     })
    //   // return newState;
    //   case 2:
    //     // debugger
    //     return Object.assign({}, newState, {
    //       list: newState.list.filter((item, index) => {
    //         return item.status === false
    //       })
    //     })
    //   // return newState
    //   default:
    //     return newState;
    // }
    return newState;

  }

  if (action.type === GET_ARTICLE_LIST) {

    console.log('result payload', { ...state, ...payload });
    return { ...state, ...payload };

  }

  if (action.type === GET_NEWS_LIST) {

    console.log('result payload', { ...state, ...payload });
    return { ...state, ...payload };

  }

  return state
}