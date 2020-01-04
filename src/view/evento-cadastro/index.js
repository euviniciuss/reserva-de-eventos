import React, { useState } from 'react';
import './evento-cadastro.css';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EventoCadastro(){

    const [msgTipo, setMsgTipo] = useState();

    return(
        <>
            <Navbar />
            <div className="col-12 mt-2">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
                </div>

                <form>
                    <div className="form-group">
                        <label>Titulo:</label>
                        <input type="text" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Tipo do Evento:</label>
                        <select className="form-control">
                            <option disabled selected value> Selecione um tipo </option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Descrição do Evento:</label>
                        <textarea className="form-control" rows="3" />
                    </div>

                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Hora:</label>
                            <input type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Upload de Foto:</label>
                        <input type="file" className="form-control"/>
                    </div>

                    <button type='button' className='btn btn-lg btn-block mt-5 mb-5 btn-enviar'>Publicar Evento</button>

                    <div className="msg-login text-center mt-2">
                        { msgTipo === 'sucesso' && <span><strong>Wow!</strong> Evento Publicado! &#128526;</span>}
                        { msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possível publicar o evento! &#128546;</span>}
                    </div>

                </form>

            </div>
        </>
    )
}