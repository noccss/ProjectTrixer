import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaCheck, FaComments } from 'react-icons/fa';

import api from '../../../services/api';

import Logo from '../../../assets/logo.png';

import './styles.css';

export default function Plano(){
    const user = localStorage.getItem('nome');
    const cash = localStorage.getItem('cash');
    const cargo = localStorage.getItem('cargo');
    const cartao = localStorage.getItem('cartao');

    const history = useHistory();

    try{
        var firstName = user.split(" ");
    } catch(err) {

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
                    <Link to={user && cargo == 'Cliente' ? '/profile' :
                        user && cargo == 'Freelancer' ? '/profileFreelancer' : '/login'} className="nav-profile">
                            {user ? firstName[0] : 'Entrar'}
                    </Link>
                    <button className={user ? 'button-profile-on' : 'button-profile-off'} onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        <div className="define-rank">
            <div className="config-bars">
                <ul>
                    <a href="/config/perfil"><li>Informações pessoais</li></a>
                    <a href="/config/payment"><li>Formas de recebimento</li></a>
                    <a href="/config/rank"><li>Rank Atual</li></a>
                    <a href="/config/termsAndCondition"><li>Termos e condições</li></a>
                </ul>
            </div>
            <div className="box-rank">
                <div className="bronze-rank">
                    <div className="text-bronze">
                        <p>Rank Bronze</p>
                        <span>Veja os beneficios disponiveis</span>
                    </div>

                    <div className="beneficies">
                        <ul>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste teste</li>
                            <li><FaCheck /> Teste</li>
                        </ul>
                    </div>
                </div>

                <div className="prata-rank">
                    <div className="text-prata">
                        <p>Rank Prata</p>
                        <span>Veja os beneficios disponiveis</span>
                    </div>

                    <div className="beneficies">
                        <ul>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste teste</li>
                            <li><FaCheck /> Teste</li>
                        </ul>
                    </div>
                </div>

                <div className="ouro-rank">
                    <div className="text-ouro">
                        <p>Rank Ouro</p>
                        <span>Veja os beneficios disponiveis</span>
                    </div>

                    <div className="beneficies">
                        <ul>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste teste</li>
                            <li><FaCheck /> Teste</li>
                        </ul>
                    </div>
                </div>
                
                <div className="diamante-rank">
                    <div className="text-diamante">
                        <p>Rank Diamante</p>
                        <span>Veja os beneficios disponiveis</span>
                    </div>

                    <div className="beneficies">
                        <ul>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste</li>
                            <li><FaCheck /> Teste teste</li>
                            <li><FaCheck /> Teste</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}