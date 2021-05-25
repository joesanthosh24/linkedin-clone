import { SET_USER, SIGN_USER_OUT } from "./action-type";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const signUserOut = () => ({
  type: SIGN_USER_OUT,
});
