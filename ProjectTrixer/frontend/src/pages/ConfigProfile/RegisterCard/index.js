import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';

import api from '../../../services/api';

import Logo from '../../../assets/logo.png';

import './styles.css';

export default function RegisterCard() {
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
        <div className="register-card">

                <div class="config-bars">
                    <ul>
                        <a href="/config/perfil"><li>Informações pessoais</li></a>
                        <a href="/config/payment"><li>Formas de recebimento</li></a>
                        <a href="/config/rank"><li>Rank Atual</li></a>
                        <a href="/config/termsAndCondition"><li>Termos e condições</li></a>
                    </ul>
                </div>
            <div class="wrapper">
                <div class="container-card">
                    <div class="title">Cadastre seu cartão</div>
                    
                    <div class="input-form">
                        <div class="section-1">
                            <div class="items">
                                <label class="label">Número do Cartão</label>
                                <input type="text" class="input" data-mask="0000 0000 0000 0000" placeholder="1234 1234 1234 1234" />
                            </div>
                        </div>
                        <div class="section-2">
                            <div class="items">
                                <label class="label">Nome do Titular</label>
                                <input type="text" class="input" placeholder="Coding Market" />
                            </div>
                        </div>
                        <div class="section-3">
                            <div class="items">
                                <label class="label">Data de expiração</label>
                                <input type="text" class="input" data-mask="00 / 00" placeholder="MM / YY" />
                            </div>
                            <div class="items">
                                <div class="cvc">
                                    <label class="label">Código CVC</label>
                                </div>
                                <input type="text" class="input" data-mask="0000" placeholder="0000" />
                            </div>
                        </div>
                    </div>
                    
                    <div class="btn">Cadastrar</div>
                    
                </div>
            </div>

            <div className={cartao ? 'registred-card' : 'registred-card'}>
                <h2>Cartões Cadastrados</h2>

                <ul>
                    <li>Cartao 1</li>
                </ul>
            </div>
        </div>
        </div>
    )
}