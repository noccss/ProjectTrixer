import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';

import './styles.css';

import api  from '../../../services/api';

import Avatar from '../../../assets/Login/avatar.svg';

import Logo from '../../../assets/logo.png';

export default function ConfigProfile() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [senha, setSenha] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [bio, setBio] = useState('');

    const [profile, setProfile] = useState([]);
    const history = useHistory();

    const userId = localStorage.getItem('id');
    var user = localStorage.getItem('nome');
    const cargo = localStorage.getItem('cargo');
    const cash = localStorage.getItem('cash');

    try{
        var firstName = user.split(" ");
    } catch(err) {

    }

        useEffect(() => {
            api.get('profileFreelancer', {
                headers: {
                    Authorization: userId,
                }
            }).then(res => {
                setProfile(res.data);
            })
        }, [userId]);

        function handleLogout() {
            localStorage.clear();

            history.push('/');
        }

    async function handleConfigProfile(e){
        e.preventDefault();

        try{
            const data = ({
                nome,
                sobrenome,
                city,
                uf,
                senha,
                bio
            });

            const res = await api.post('config/profile', data, {
                headers: {
                    Authorization: userId
                }
            });

        } catch(err){
            alert('Erro ao realizar mudanças');
        }

        localStorage.setItem('nome', nome);
    }

    return(
        <div>
            <div className="define-header-init">
                <div className="header-profile">
                    <Link to="/">
                        <img src={Logo} />
                    </Link>
                        <div className="nav-bar-profile">
                            <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(cash)}</p>
                            <Link to="/contatos" className="nav-profile"><FaComments style={{fontSize: 30}} /></Link>
                            <Link to={user && cargo == 'Cliente' ? '/profile' :
                                user && cargo == 'Freelancer' ? '/profileFreelancer' : '/login'} className="nav-profile">
                                    {user ? firstName[0] : 'Entrar'}
                            </Link>
                            <button className={user ? 'button-profile-on' : 'button-profile-off'} onClick={handleLogout}>
                                        Logout
                            </button>
                        </div>
                </div>
            </div>

            <div className="define-config">
                <div className="config-bars">
                    <ul>
                        <a href="/config/perfil"><li>Informações pessoais</li></a>
                        <a href="/config/payment"><li>Formas de recebimento</li></a>
                        <a href="/config/rank"><li>Rank Atual</li></a>
                        <a href="/config/termsAndCondition"><li>Termos e condições</li></a>
                    </ul>
                </div>
                <div className="box-config">
                    <form onSubmit={handleConfigProfile}>
                        <div className="header-config">
                            <button type="submit">Salvar alterações</button>              
                            <img src={Avatar} />
                            <p className="config-name">{user}</p>
                            <input className="change-img" id="file" type="file" accept="image/*" />
                            <label for="file">Escolha uma foto de perfil</label>      
                        </div>
                        <div className="config-profile-geral">
                            <div className="config-profile-bio">
                                <span>Biografia</span>
                                <textarea 
                                    value={bio}
                                    onChange={e => setBio(e.target.value)}
                                    
                                >
                                    
                                    </textarea>
                            </div>


                            <p>Nome</p>
                            <input 
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                            
                            <p>Sobrenome</p>
                            <input 
                                value={sobrenome}
                                onChange={e => setSobrenome(e.target.value)}
                            />

                            <p>Cidade</p>
                            <input 
                                value={city} 
                                onChange={e => setCity(e.target.value)}
                            />

                            <p>Estado</p>
                            <input 
                                value={uf}
                                onChange={e => setUf(e.target.value)} 
                            />

                            <p>Senha</p>
                            <input 
                                type="password"
                                value={senha} 
                                onChange={e => setSenha(e.target.value)}
                            />


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}