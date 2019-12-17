import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './actionType';

export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = ()=>({
    type:ADD_TODO_ITEM
})

export const delItemAction = (obj)=>({
    type:DEL_TODO_ITEM,
    obj
})


