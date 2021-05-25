import { signUserOut, setUser } from "./action-functions";
import { auth, provider } from "../../firebase";

export function signInWithGoogle() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}

export function signOut() {
  return (dispatch) => {
    auth
      .signOut()
      .then((response) => {
        dispatch(signUserOut());
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}
