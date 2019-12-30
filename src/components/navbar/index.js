import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand text-white font-weight-bold" href="#">Eventos</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <i className="fa fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">

                    <li className="nav-item">
                        <Link className="nav-link" to="#">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="NovoUsuario">Cadastrar</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="Login">Login</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
};

