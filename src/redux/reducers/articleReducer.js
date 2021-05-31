import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_ARTICLES,
} from "../actions/action-type";

const INITIAL_STATE = { loading: false, errorMsg: null, articles: [] };

const articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
        errorMsg: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: null,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };
    case ADD_ARTICLES:
      return {
        ...state,
        loading: false,
        errorMsg: null,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
