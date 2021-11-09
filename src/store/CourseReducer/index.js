import {
  // GET_COURSE_FIELD,
  // GET_COURSE_FIELD_LIST,
  CHANGE_COURSE_FIELD
} from '../actionType';

let initialState = {
  // field: [],
  // fieldList: [],
  curField: -1
};

export default (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_COURSE_FIELD:
      return {
        ...state,
        curField: action.field
      }
    default:
      return state
  }

}