import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUsers, FaComments, FaPaperPlane } from 'react-icons/fa';

import './styles.css';
import api from '../../../services/api';

import Padrao from '../../../assets/Login/avatar.svg';

import Avatar from '../../../assets/Users/profile.jpg';

import Logo from '../../../assets/logo.png';

export default function Chat() {
    const [contatos, setContatos] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [readMsg, readSetMsg] = useState([]);
    const [friend, setFriend] = useState([]);
    const history = useHistory();
    
    const id_de = localStorage.getItem('id');
    const id_para = localStorage.getItem('AnotherUser');
    const id_chat = localStorage.getItem('idChat');
    const cargo = localStorage.getItem('cargo');
    const cash = localStorage.getItem('cash');
    const userId = localStorage.getItem('nome');

    try{
        var firstName = userId.split(" ");
    } catch(err) {

    }

    async function sendMessage(e) {
        e.preventDefault();

        try{
            const data = ({
                mensagem,
            });

            const res = await api.post(`chat/${id_chat}/y/${id_para}`, 
                data,
                {
                    headers: {
                        Authorization: id_de,
                    }
                }
            );

            refresh();
        } catch(err) {
            alert('Erro ao enviar a mensagem, tente novamente');
        }
    }


    useEffect(() => {
            api.get(`message/${id_chat}/${id_de}`, {
                headers: {
                    Authorization: id_de,
                }
            })
                .then(res => {
                    readSetMsg(res.data);
                })
    }, [id_chat]);

    function refresh(){
        window.location.reload(false);
    }

    useEffect(() => {
        if(cargo == 'Freelancer'){
            api.get(`/chat/${id_de}`, {})
                .then(res => {
                    setContatos(res.data);
        })
        } else{
            api.get(`/chats/${id_de}`, {})
                .then(res => {
                    setContatos(res.data);
                })
        }
    }, []);

    useEffect(() => {
        api.get(`local/${id_para}`, {
            headers: {
                authorization: id_de,
            }
        }).then(res => {
            setFriend(res.data);
        })
    }, [id_para]);


    async function selectChat(id_another_user){
        const res = await api.get(`locale/${id_another_user}`, {
            headers: {
                authorization: id_de,
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


    function handlePropost(proposts){
        proposts = false;
        return proposts;
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

    <div className="define-chat">
        <div className="contact">
            <div className="header-contact">
            <img src={Padrao} alt="" />

                <h5>{userId}</h5>
            </div>
            <div className="container-contact">
                {contatos.map(contatos => (
                    <ul key={contatos.id}>
                        <button onClick={() => selectChat(id_de == contatos.id_para ? contatos.id_de : contatos.id_para)}><li>
                        <img src={contatos.picture} alt="" />
                            <p>{contatos.nome} {contatos.sobrenome}</p>
                        </li></button>
                    </ul>
                ))}
            </div>
        </div>

        <div className="chat">
            <div className="header-chat">
            <img src={friend.picture} alt="" />
                <h5>{friend.nome} {friend.sobrenome}</h5>
                {/* <button>Acompanhar projeto</button> */}
                <Link to="/chat/projeto">Acompanhar Projeto</Link>
            </div>
            <div className="container-chat">
            {readMsg.map(readMsg => (
                <ul key={readMsg.id}>
                    <p className={readMsg.id_de == id_de ? 'chat-send' : 'chat-receive'}>{readMsg.mensagem}</p>
                </ul>
            ))}
            </div>

            <form onSubmit={sendMessage}>
                <div className="footer-chat">
                    <input 
                        value={mensagem}
                        onChange={e => setMensagem(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>

    </div>
</div>
    );
}