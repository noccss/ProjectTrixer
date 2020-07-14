import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaIdCard, FaVenusMars, FaMobile } from 'react-icons/fa';

import './styles.css';

import api from '../../../services/api';

import wave from '../../../assets/Register/waves.png';
import Source from '../../../assets/Register/source.svg';
import Avatar from '../../../assets/Register/avatar.svg';


export default function Register() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [sexo, setSexo] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');

    const history = useHistory();

    async function handleRegisterClient(e){
        e.preventDefault();

        try{
            const data = ({
                nome,
                sobrenome,
                sexo,
                senha,
                email,
                cpf
            });

            const res = await api.post('cliente', data)

            localStorage.setItem('id', res.data.id);

            history.push('/registerClientLocal');
        } catch(erro){
            alert('Erro ao se cadastrar');
        }
    }

    return (
        <div className="body-register">
            <img className="wave" src={wave} />
            <div className="container-registerScreen">
                <div className="img-registerScreen">
                    <img src={Source} />
                </div>
                <div className="register-content">
                    <form onSubmit={handleRegisterClient}>
                    {/* <h2 className="title">Bem-Vindo</h2> */}
                    <div class="line-register">
                        <div class="circle-regis1">
                            <h3>1</h3>
                        </div>

                        <div class="line-regis2">

                        </div>
                        <div class="circle-regis2">
                            <h3>2</h3>
                        </div>

                        <div class="line-regis2">

                        </div>
                        <div class="circle-regis3">
                            <h3>3</h3>
                        </div>
                    </div>
                        <div className="input-div one">
                        <div className="i">
                                <i className="fas fa-user"><FaUser /></i>
                        </div>
                        <div className="div">
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder="Nome"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                        </div>
                        </div>

                        <div className="input-div one">
                        <div className="i">
                                <i className="fas fa-user"><FaUser /></i>
                        </div>
                        <div className="div">
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder="Sobrenome"
                                    value={sobrenome}
                                    onChange={e => setSobrenome(e.target.value)}
                                />
                        </div>
                        </div>

                        <div className="input-div one">
                        <div className="i">
                                <i className="fas fa-user"><FaUser /></i>
                        </div>
                        <div className="div">
                                <input 
                                    type="email" 
                                    className="input" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                        </div>
                        </div>
                        
                        <div className="input-div one">
                            <div className="i">
                                    <i className="far fa-id-card"><FaIdCard /></i>
                            </div>
                            <div className="div">
                                    <input 
                                        type="text" 
                                        className="input" 
                                        placeholder="CPF" 
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                    />
                            </div>
                        </div>

                        <div className="input-div one">
                            <div className="i">
                                    <i className="fas fa-venus-mars"><FaVenusMars /></i>
                            </div>
                            <div className="div">
                                <select 
                                    value={sexo}
                                    onChange={e => setSexo(e.target.value)}
                                >
                                    <option value="genero">Defina o seu gênero</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-div one">
                            <div className="i">
                                    <i className="fas fa-mobile"><FaMobile /></i>
                            </div>
                            <div className="div">
                                    <input 
                                        type="password" 
                                        className="input" 
                                        placeholder="Senha"
                                        value={senha}
                                        onChange={e => setSenha(e.target.value)}
                                    />
                            </div>
                        </div>

                        <input type="submit" className="btn-register" value="Proxima etapa" />
                        <Link to="/login">Já possui uma conta? Entre aqui</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}