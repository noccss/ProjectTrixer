import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaComments, FaArrowLeft } from 'react-icons/fa';

import Logo from '../../../assets/logo.png';

import './styles.css';

export default function Project() {
    const cash = localStorage.getItem('cash');
    const userId = localStorage.getItem('id');
    const cargo = localStorage.getItem('cargo');
    const nome = localStorage.getItem('nome');

    const history = useHistory();

    try{
        var firstName = nome.split(" ");
    } catch(err) {

    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return(
            <div class="define-payment">
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
            {cargo == 'Cliente' ? 
                <div class="box-payment">
                    <Link to="/chat"><FaArrowLeft />Voltar</Link>
                    <button>Deseja cancelar o Projeto?</button>

                    <h1>Andamento do Projeto</h1>

                    <p>Você possui um serviço aberto com Nícolas Oliveira, com o serviço Faça Batatas uoly</p>

                    <p>Aparentemente o projeto está encaminhando perfeitamente. <Link to="#">Possui algum problema? Conte conosco</Link></p>

                    <p>Recomendamos realizar pagamentos apenas quando o Freelancer terminar o projeto, mas caso tenha certeza, podemos liberar no máximo 50% do pagamento antecipado</p>

                    <span>Saldo atual: R$: {cash}</span>

                    <input type="button" value="Realizar pagamento" alt="Saldo indisponivel" className={cash <= 10 ? 'payment-input-error' : 'payment-input'} />
                </div>
                
                :
                
                <div class="box-payment">
                    <Link to="/chat"><FaArrowLeft />Voltar</Link>
                    <button>Deseja cancelar o Projeto?</button>

                    <h1>Andamento do Projeto</h1>

                    <p>Você possui um serviço aberto com Ariane Bianca, com o serviço Faça Batatas uoly</p>

                    <p>Aparentemente o projeto está encaminhando perfeitamente. <a href="/#suporte">Possui algum problema? Conte conosco</a></p>

                    <p>Deseja enviar o projeto?</p>

                    <div className="fileSend">
                        <input type="file" id='file' className="change-img" />

                        <label for='file'>Enviar projeto</label>
                    </div>

                    <input type="button" value="Enviar arquivo" alt="Saldo indisponivel" className={cash <= 10 ? 'payment-input-error' : 'payment-input'} />
                </div>
            }
        </div>
    );
}