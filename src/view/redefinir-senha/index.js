import React, {useState} from 'react';
import './redefinir-senha.css';

import firebase from '../../config/firebase';
import 'firebase/auth';
import NavBar from '../../components/navbar';

export default function RedefinirSenha() {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function EnviarEmail() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado =>{
            setMsg('Enviamos um link no seu email para você redefinir sua senha!')
        }).catch(erro=>{
            setMsg('Verifique se o email está correto!')
        })
    }
    return(
        <>
        <NavBar/>
        <form className='text-center form-login mx-auto mt-5'>
            <h3 className='mb-3 text-black font-weight-bold'>Redefinir Senha</h3>

            <input onChange={(e)=> setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='Email'></input>
            <button type='button' className='btn btn-lg btn-block mt-5 mb-5 btn-enviar' onClick={EnviarEmail}>Enviar</button>

            <div className="msg my-4 text-center">
                <span> { msg }</span>
            </div>

        </form>
        </>
    )
    
}