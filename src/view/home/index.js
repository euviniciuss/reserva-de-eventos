import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import EventoCard from '../../components/evento-card/'

export default function Home(){
    return(
        <>
            <Navbar />
            <h1> {useSelector( state => state.usuarioEmail)} </h1>
            <h1>Logado: {useSelector( state => state.usuarioLogin)} </h1>

            <div className="row mx-auto">
                <EventoCard />
                <EventoCard />
                <EventoCard />
                <EventoCard />
                <EventoCard />
                <EventoCard />
                <EventoCard />
                <EventoCard />
            </div>
        </>
    )
};