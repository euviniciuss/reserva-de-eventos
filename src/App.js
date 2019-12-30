import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Pages */
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/'


export default function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/novousuario' component={NovoUsuario}/>
    </Router>
  );
}
