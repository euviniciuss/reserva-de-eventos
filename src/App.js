import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Pages */
import Home from './view/home/'
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/'


export default function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/novousuario' component={NovoUsuario}/>
      <Route exact path='/login' component={Login}/>
    </Router>
  );
}
