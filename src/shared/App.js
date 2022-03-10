import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import { Login, PostList, Signup } from '../pages'
import { Header } from '../components';
import { Grid } from '../elements';


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Grid>
        <Route path='/' exact component={PostList}/>
        <Route path='/signup' exact component={Signup}/>
        <Route path='/login' exact component={Login}/>
      </Grid>
    </React.Fragment>
  );
}

export default App;
