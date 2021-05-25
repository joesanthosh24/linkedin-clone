import { SET_USER, SIGN_USER_OUT } from "../actions/action-type";

const INITIAL_STATE = { user: null };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SIGN_USER_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
