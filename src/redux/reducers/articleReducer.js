import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
} from "../actions/action-type";

const INITIAL_STATE = { loading: false, errorMsg: "" };

const articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
