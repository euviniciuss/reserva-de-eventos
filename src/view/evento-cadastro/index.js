import React, { useState } from 'react';
import './evento-cadastro.css';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EventoCadastro(){

    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const usuarioEmail = useSelector( state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();


    function cadastrarEvento(){
        setMsgTipo(null);
        setCarregando(1);

        storage.ref(`imagens/${foto.name}`).put(foto).then( () => {
            db.collection('eventos').add( {
                titulo: titulo,
                tipo: tipo,
                detalhes: detalhes,
                data: data,
                hora: hora,
                usuario: usuarioEmail,
                vizualizações: 0,
                foto: foto.name,
                publico: 1,
                criacao: new Date()
            } ).then( () => {
                setMsgTipo('sucesso');
                setCarregando(0);
            }).catch( erro => {
                setMsgTipo('erro');
                setCarregando(0);
            });

        })
        
    };

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
                        <input onChange ={(e) => setTitulo(e.target.value)} type="text" className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Tipo do Evento:</label>
                        <select onChange ={(e) => setTipo(e.target.value)} className="form-control">
                            <option disabled selected value> Selecione um tipo </option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Descrição do Evento:</label>
                        <textarea onChange ={(e) => setDetalhes(e.target.value)} className="form-control" rows="3" />
                    </div>

                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input onChange ={(e) => setData(e.target.value)} type="date" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Hora:</label>
                            <input onChange ={(e) => setHora(e.target.value)} type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Upload de Foto:</label>
                        <input onChange ={(e) => setFoto(e.target.files[0])} type="file" className="form-control"/>
                    </div>

                    <div className="row">
                        {
                            carregando > 0 ? <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Loading...</span></div> 
                            : <button onClick = {cadastrarEvento} type='button' className='btn btn-lg btn-block mt-1 mb-5 btn-enviar'>Publicar Evento</button>
                        }
                    </div>

                    <div className="msg-login text-center mt-2">
                        { msgTipo === 'sucesso' && <span><strong>Wow!</strong> Evento Publicado! &#128526;</span>}
                        { msgTipo === 'erro' && <span><strong>Ops!</strong> Não foi possível publicar o evento! &#128546;</span>}
                    </div>

                </form>

            </div>
        </>
    )
}