import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
  CHANGE_TODO_ITEM_STATUS,
  CHANGE_INPUT_VALUE_CON,
  ADD_TODO_ITEM_CON,
  DEL_TODO_ITEM_CON,
  CHANGE_TODO_ITEM_STATUS_CON,
  SET_VISIBILITY_FILTER_CON,
  GET_ARTICLE_LIST,
  GET_NEWS_LIST
} from './actionType';

import { getArticleList, getNewsList } from '../services/index';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const changeItemStatusAction = (obj, value) => ({
  type: CHANGE_TODO_ITEM_STATUS,
  obj,
  value
});

export const delItemAction = (obj) => ({
  type: DEL_TODO_ITEM,
  obj
})



// ----------------  connect 版

export const getInputChangeCAction = (value) => ({
  type: CHANGE_INPUT_VALUE_CON,
  value
});

export const getAddItemCAction = () => ({
  type: ADD_TODO_ITEM_CON
});

export const changeItemStatusCAction = (obj, value) => ({
  type: CHANGE_TODO_ITEM_STATUS_CON,
  obj,
  value
});

export const delItemCAction = (obj) => ({
  type: DEL_TODO_ITEM_CON,
  obj
})

export const filterListCAction = (value) => ({
  type: SET_VISIBILITY_FILTER_CON,
  value
})


// 请求文章
export const getArtileList = (params) => {
  return async dispatch => {
    try {
      // 开始请求
      dispatch({
        type: GET_ARTICLE_LIST,
        payload: {
          loading: true
        }
      });

      const response = await getArticleList(params);
      const { code, postList, message } = response;

      dispatch({
        type: GET_ARTICLE_LIST,
        payload: {
          loading: false
        }
      });
      if (code === 0) {
        dispatch({
          type: GET_ARTICLE_LIST,
          payload: {
            artileList: postList,
          }
        });
        return response;
      } else {
        throw new Error(message);
      }

    } catch (error) {
      throw new Error(error);
    }
  }
}

// 请求新闻:

export const getNewsListByParams = (params) => {
  return async dispatch => {
    try {
      // 开始请求
      dispatch({
        type: GET_NEWS_LIST,
        payload: {
          loading: true
        }
      });

      const response = await getNewsList(params);
      const { list, code, total } = response;

      dispatch({
        type: GET_NEWS_LIST,
        payload: {
          loading: false
        }
      });
      if (code === 0) {
        dispatch({
          type: GET_ARTICLE_LIST,
          payload: {
            newsList: list,
            total: total
          }
        });
        return response;
      } else {
        throw new Error('');
      }

    } catch (error) {
      throw new Error(error);
    }
  }
}