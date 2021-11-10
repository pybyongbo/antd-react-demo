import {
  CHANGE_COURSE_FIELD
} from '../actionType';

let initialState = {
  curField: -1,
  // curTotal: 0
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