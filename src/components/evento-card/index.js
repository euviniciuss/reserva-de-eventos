import React, { useState, useEffect } from 'react';
import './evento-card.css';
import { Link } from 'react-router-dom';

export default function EventoCard(){
    return(
        <div className="col-md-3 col-sm-12">
            <img src="https://via.placeholder.com/500" className="card-img-top img-cartao" alt="Imagem do Evento"/>

            <div className="card-body my-2">
                <h5>Titulo do Evento</h5>
                <p className="card-text text-justify">Detalhes do Evento</p>
                
                <div className="row rodape-card d-flex aling-items-center">

                    <div className="col-6">
                        <Link to="#" className="btn btn-sn btn-detalhes">+ detalhes</Link>
                    </div>

                    <div className="col-6 text-right">
                        <i className="fas fa-eye"></i><span>2019</span>
                    </div>

                </div>


            </div>

        </div>
    )
};