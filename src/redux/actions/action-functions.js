import {
  SET_USER,
  SIGN_USER_OUT,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_ARTICLES,
} from "./action-type";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const signUserOut = () => ({
  type: SIGN_USER_OUT,
});

export const addPostRequest = () => ({
  type: ADD_POST_REQUEST,
});

export const addPostFailed = (errorMsg) => ({
  type: ADD_POST_FAILURE,
  payload: errorMsg,
});

export const addPostSuccess = () => ({
  type: ADD_POST_SUCCESS,
});

export const adddArticles = (payload) => ({
  type: ADD_ARTICLES,
  payload,
});
