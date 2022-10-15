import {
  CHANGE_COURSE_FIELD,
  GET_COURSE_FIELD_LIST,
  GET_COURSE_FIELD_LIST_BY_KEYWORDS
} from '../actionType';

let initialState = {
  curField: -1,
  page: 1,
  pageSize: 10,
  listData: []
};

export default (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_COURSE_FIELD:
      return {
        ...state,
        page: action.page,
        pageSize: action.pageSize,
        curField: action.field
      }
    case GET_COURSE_FIELD_LIST:
      return {
        ...state,
        listData: action.payload.listData
      }
    case GET_COURSE_FIELD_LIST_BY_KEYWORDS:
      return {
        ...state,
        listData: action.payload.listData
      }
    default:
      return state
  }

}