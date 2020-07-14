import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';

import './styles.css';
import api from '../../../services/api';

import Logo from '../../../assets/logo.png';

export default function Details() {
    const [details, setDetails] = useState({});
    const [proposta, setProposta] = useState('');
    const history = useHistory();

    let id = localStorage.getItem('idProduct');
    const cargo = localStorage.getItem('cargo');
    const userId = localStorage.getItem('id');
    const cash = localStorage.getItem('cash');
    const user = localStorage.getItem('nome');

    try{
        var firstName = user.split(" ");
    } catch(err) {

    }

    useEffect(() => {
        async function restoreDetails() {
                await api.get(`details/${id}`, {})
                .then(res => {
                    setDetails(res.data);
                    // console.log(res.data);
                })
        }
        restoreDetails();
    }, []);

    async function viewChat(id_client){
            try{
                await api.get(`proposta/${id}`, {}).then(res => {
                    setProposta(res.data);
                    console.log(res.data);
                    // localStorage.setItem('teste', res.data.proposta);
                })
            console.log(proposta.proposta);

            } catch(err) {
                alert('Erro ao enviar a proposta');
            }

        try{
            await api.get(`details/${id}`).then(res => {
                setDetails(res.data);
            });

            localStorage.setItem('AnotherUser', id_client);

            existChat();

            async function existChat(){
                const res = await api.get(`locale/${id_client}`, {
                    headers: {
                        authorization: userId,
                    }
                })

                if(res.data.id) {
                    localStorage.setItem('idChat', res.data.id);

                // history.push(`/chat/${res.data.id}/y/${id}`);
                history.push('/chat');
                } else {
                    createChat();
                }

            }
            async function createChat() {
                const res = await api.post(`chat/${id_client}`, {}, {
                    headers: {
                        Authorization: userId,
                    }   
                })
                
                localStorage.setItem('idChat', res.data.id);
                // history.push(`/chat/${res.data.id}/y/${id}`);
                history.push('/chat');
            }

        } catch(err){

        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return(
        <div>
            <div className="header-profile">
                <Link to="/">
                    <img src={Logo} />
                </Link>
                <div className="nav-bar-profile">
                    <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(cash)}</p>
                    <Link to="/contatos" className="nav-profile"><FaComments style={{fontSize: 30}} /></Link>
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
            <div className="box-details">

                    <article key={details.id}>
                        <strong>{details.title}</strong>
                        <h5>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(details.value)}</h5>

                        <p>{details.description}</p>

                        <h1>Preferencias</h1>

                        <ul>
                            <li>{details.skills}</li>
                        </ul>

                        <h2>12/06/2020</h2>
                        <h3>Este serviço foi solicitado por: {details.nome} {details.sobrenome}</h3>

                        <button onClick={() => viewChat(details.client_id)} className={cargo == 'Freelancer' ? 'proposta-details-on' : 'proposta-details-off' }>Enviar proposta</button>
                </article>

            </div>
        </div>
    );
}