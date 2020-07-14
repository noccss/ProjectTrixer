import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';

import api from '../../../services/api';

import './styles.css';

import avatar from '../../../assets/Login/avatar.svg';

import Logo from '../../../assets/logo.png';


export default function Contatos() {
    const [contatos, setContatos] = useState([]);
    const history = useHistory();

    const idUser = localStorage.getItem('id');
    const cargo = localStorage.getItem('cargo');

    const userId = localStorage.getItem('nome');
    const cash = localStorage.getItem('cash');

    try{
        var firstName = userId.split(" ");
    } catch(err) {

    }

    useEffect(() => {
        if(cargo == 'Freelancer'){
            api.get(`/chat/${idUser}`, {})
                .then(res => {
                    setContatos(res.data);
        })
        } else{
            api.get(`/chats/${idUser}`, {})
                .then(res => {
                    setContatos(res.data);
                })
        }
    }, []);

    async function selectChat(id_another_user){
        const res = await api.get(`locale/${id_another_user}`, {
            headers: {
                authorization: idUser,
            }
        })

        localStorage.setItem('idChat', res.data.id);
        localStorage.setItem('AnotherUser', id_another_user);

        history.push('/chat');
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return(

        <section>
            <div className="header-profile">
                <Link to="/">
                    <img src={Logo} />
                </Link>
                <div className="nav-bar-profile">
                    <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(cash)}</p>
                    <Link to="/product" className="nav-profile">Serviços</Link>
                    <Link to={userId && cargo == 'Cliente' ? '/profile' :
                        userId && cargo == 'Freelancer' ? '/profileFreelancer' : '/login'} className="nav-profile">
                            {userId ? firstName[0] : 'Entrar'}
                    </Link>
                    <Link to="/config/perfil" className="nav-profile">Configurações</Link>
                    <button className={userId ? 'button-profile-on' : 'button-profile-off'} onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
            <div className="container">
                <h1 className="heading">Contatos</h1>
                <div className="card-wrapper">
                {contatos.map(contatos => (
                    <div className="card">
                        <div className="card-img"></div>
                            <img src={avatar} className="profile-img" />
                            <h1>{contatos.nome}</h1>
                            <p className="job-title">{contatos.cargo}</p>
                            <p className="about">
                                {contatos.bio}
                            </p>
                            <button onClick={() => selectChat(idUser == contatos.id_para ? contatos.id_de : contatos.id_para)} className="btn">Conversar</button>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}