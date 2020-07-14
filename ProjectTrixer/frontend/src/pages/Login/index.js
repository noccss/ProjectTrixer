import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

import api from '../../services/api';

import './styles.css';

import avatar from '../../assets/Login/avatar.svg';
import img from '../../assets/Login/img.svg'; 
import waves from '../../assets/Login/waves.png';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const cash = 0;
            const res = await api.post('sessions', { email, senha });

            localStorage.setItem('email', email);
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('cargo', res.data.cargo);
            localStorage.setItem('nome', res.data.nome);
            localStorage.setItem('cash', cash);

            history.push('/profile');
        } catch(err) {
            const cash = 0;
            try{
                const res = await api.post('session', { email, senha });

                localStorage.setItem('email', email);
                localStorage.setItem('id', res.data.id);
                localStorage.setItem('cargo', res.data.cargo);
                localStorage.setItem('nome', res.data.nome);
                localStorage.setItem('cash', cash);
                
                history.push('/profileFreelancer');
            } catch(erro) {
                alert('Nenhum usuário encontrado');
            }
        }
    }

    return(
        <div className="body-login">
                <img className="wave-login img-login" src={waves}/>
                <div className="container-login">
                    <div className="img-log">
                        <img className="img-login" src={img}/>
                    </div>
                <div className="login-container">
                    <form className="form-login" onSubmit={handleLogin}>
                        <img className="avatar-login img-login" src={avatar}/>
                        <h2 className="h2-login">Bem Vindo Usuário</h2>
                        <div className="input-div-login one">
                            <div className="i-login">
                                <i className="login-i"><FaUser className="fas fa-user"></FaUser></i>
                            </div>
                            <div>
                                <input 
                                    className="input-login" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-div-login two">
                            <div className="i-login">
                                <i className="login-i"><FaLock className="fas fa-lock"></FaLock></i>
                            </div>
                            <div>
                                <input 
                                    className="input-login" 
                                    type="password" 
                                    placeholder="Password"
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                />
                            </div>
                        </div>
                        <Link to="#" className="link-login">Forgot Password?</Link>
                        <input type="submit" className="btn-login" value="Login"/>
                        <Link to="/choice" className="link-login">Caso não possua uma conta, clique aqui</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}