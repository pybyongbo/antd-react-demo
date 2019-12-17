import  {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DEL_TODO_ITEM
} from './actionType';

const defaultState = {
    inputValue:'',
    list:[]
}

export default (state = defaultState,action)=>{

    // const {type,payload}  = action;
    // switch (type){
    //     case CHANGE_INPUT_VALUE:
    //         return {...state,...payload};
    //     case ADD_TODO_ITEM:
    //         return {...state,...payload};
    //     case DEL_TODO_ITEM:
    //         return {...state,...payload};
    //     default:
    //         return state;
    // }

    if(action.type === CHANGE_INPUT_VALUE) {

        /**方法1: */
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.inputValue = action.value;
        // return newState

         /**方法2: */
        // return Object.assign({},state,{
        //     inputValue:action.value
        // })

        // console.log({...state,inputValue:action.value});

        return {...state,inputValue:action.value}
    }

    if(action.type === ADD_TODO_ITEM) {


        // const newState = JSON.parse(JSON.stringify(state));
        // newState.list.push(newState.inputValue);
        // newState.inputValue = ''; //清空文本框的值;
        // return newState

        // console.log({...state});
        const newState = {...state};
        newState.list.push({content:newState.inputValue,timeStamp:new Date().getTime()});
        newState.inputValue=""; //提交后清空文本框的值.

        return {...newState}
    }
    if (action.type === DEL_TODO_ITEM) {
        // const newState = JSON.parse(JSON.stringify(state));

        const newState = {...state};
        newState.list.forEach((item, index) => {
            // console.log(action);
            if (item.timeStamp === action.obj.timeStamp) {
                newState.list.splice(index,1)
            }
        })
        return newState
    }


    return state;
}