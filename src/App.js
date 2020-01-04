import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/index';
import { Provider } from 'react-redux';

/* Pages */
import Home from './view/home/'
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/'
import RedefinirSenha from './view/redefinir-senha/';
import EventoCadastro from './view/evento-cadastro/'


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/novousuario' component={NovoUsuario}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path = '/RedefinirSenha' component={RedefinirSenha}/>
        <Route exact path = '/eventocadastro' component={EventoCadastro}/>
      </Router>
    </Provider>
  );
};
