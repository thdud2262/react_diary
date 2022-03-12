import React from 'react';
import { Route } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history } from "../redux/configureStore";
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { apiKey } from './firebase';

import './App.css';
import { Login, PostList, Signup } from '../pages'
import { Header } from '../components';




function App() {
  const dispatch = useDispatch();
  // 로그인유지(2) session체크
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false
  console.log(_session_key, is_session)

  // 렌더링 될 때마다 로그인 체크
  React.useEffect(()=>{
    if(is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Header></Header>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={PostList}/>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/login' exact component={Login}/>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
