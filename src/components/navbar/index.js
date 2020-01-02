import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar(){

    const dispach = useDispatch();

    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand text-white font-weight-bold" href="#">Eventos</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <i className="fa fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    {
                        useSelector( state => state.usuarioLogin) > 0 ?
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Publicar Evento</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Meus Eventos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={ () => dispach( {type: 'LOG_OUT'} )}>Sair</Link>
                        </li>
                    </>

                    :

                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="NovoUsuario">Cadastrar</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="Login">Login</Link>
                        </li>
                    </>
                    
                    }   


                </ul>
            </div>
        </nav>
    )
};

