import {
  signUserOut,
  setUser,
  addPostRequest,
  addPostSuccess,
  addPostFailed,
  adddArticles,
} from "./action-functions";
import db, { auth, provider, storage } from "../../firebase";

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

export function postArticle(payload) {
  return (dispatch) => {
    dispatch(addPostRequest());
    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);

      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log(`Progress: ${progress}%`);

          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => {
          dispatch(addPostFailed(error.message));

          console.log(error.code);
        },
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });

          dispatch(addPostSuccess());
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(addPostSuccess());
    }
  };
}

export function getArticles() {
  return (dispatch) => {
    let payload;

    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot(async (snapshot) => {
        payload = await snapshot.docs.map((doc) => doc.data());
        dispatch(adddArticles(payload));
      });
  };
}
