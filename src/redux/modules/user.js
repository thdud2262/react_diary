import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import firebase from "firebase/app";
import { auth } from "../../shared/firebase";


//action type
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";


//action 함수
const logOut = createAction (LOG_OUT,(user)=> ({user}))
const getUser = createAction (GET_USER,(user)=> ({user}))
const setUser = createAction (SET_USER,(user)=> ({user}))


//initialState
const initialState = {
  user: null,
  is_login : false,
}


//middleware
const loginAction = (user) => {
  return function (dispatch, getState, {history}) {
      console.log('로그인 미들웨어')
      dispatch(setUser(user));
      history.push('/');
  }
}
const signupFB = ( id, pwd, nickname ) => {
  return function (dispatch, getState, {history}) {

    auth
    //firebase 신규사용자가입 : 이메일, 비밀번호 유효성검사 , 회원가입 
    .createUserWithEmailAndPassword(id, pwd)
    .then((user) => {
      //로그인 성공하면 유저정보 업데이트하기 (사용자관리, 프로필업데이트)
      console.log(user)
      auth.currentUser.updateProfile({
        displayName: nickname,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // 닉네임까지 유저정보 저장에 성공했으면 
        console.log(id,nickname, user.user.displayName, user.user.uid)
        dispatch(setUser({
          id: id,
          nickname: nickname,
          user_photo: user.user.photoURL,
          user_uid: user.user.uid,
        }))
      }).catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
      window.alert(`환영합니다^^ ${nickname}님!`)
      history.push('/')
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
  
  }
}

const loginFB = (id, pwd) => {
  return function (dispatch, getState, {history}) {
    // firebase 인증 지속성 + 로그인
    // 세션에 로그인정보 저장 ( 사용자 세션 지속 )
    auth
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      auth
      // 이메일, pw로 로그인
      .signInWithEmailAndPassword(id, pwd)
      .then((user)=>{
        console.log(user)
        console.log(user.user.displayName, user.user.uid)
        dispatch(setUser({
          id: id,
          nickname: user.user.displayName,
          user_photo: user.user.photoURL,
          user_uid: user.user.uid,
        }))
        window.alert(`즐거운 시간 되세요! ${user.user.displayName}`)
        history.push('/')
      })
    })
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }
}

const loginCheckFB = () =>{
  return function (dispatch, getState, {history}) {
    // 세션에 저장된 로그인 정보를 리덕스에 저장 = 로그인 유지 
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser({
          id: user.user.email,
          nickname: user.user.displayName,
          user_photo: user.user.photoURL,
          user_uid: user.user.uid,
        }))
        // ...
      } else {
        dispatch(logOut())
      }
    });
  }
}
const logOutFB = () => {
  return function (dispatch, getState, {history}) {
    auth.signOut().then(() => {
      dispatch(logOut());
      window.alert('다음에 또 오세요!')
      history.push("/login");
    });
  };
};


//reducer 
export default handleActions(
  {
    [SET_USER]: (state, action) =>
    //redux에 유저정보 넣는 것! setUser
      produce(state, (draft) => {
        console.log('로그인리듀서')
        setCookie("is_login", "success");
        console.log(state)
        console.log(action)
        draft.user = action.payload.user;
				draft.is_login = true;
      }),
		[LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
				draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);


const actionCreators = {
  getUser,
  setUser,
  logOut,
  loginAction,
  signupFB,
  loginFB,
  loginCheckFB,
  logOutFB,
};

export { actionCreators };
