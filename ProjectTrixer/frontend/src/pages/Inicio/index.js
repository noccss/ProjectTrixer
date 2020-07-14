import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import './styles.css';

import Logo from '../../assets/logo.png';
import Sobre from '../../assets/Inicio/sobre.png';
import Howto from '../../assets/Inicio/como funciona.png';

export default function Inicio() {
    const userId = localStorage.getItem('id');
    const user = localStorage.getItem('nome');
    const cargo = localStorage.getItem('cargo');

    try{
        var firstName = user.split(" ");
    } catch(err) {

    }

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return(
        <div className="define-home">
            <div className="header-home">
                <Link to="#"><img src={Logo} /></Link>

                <Link to="#" className="navbar-home">Sobre</Link>
                <Link to="#" className="navbar-home">Como funciona?</Link>
                <Link to="#" className="navbar-home">Recursos</Link>
                <Link to="#" className="navbar-home">Entre em contatos conosco</Link>

                <Link to={user && cargo == 'Cliente' ? '/profile' : 
                                user && cargo == 'Freelancer' ? '/profileFreelancer' :'/login'} className="navbar-home-login">
                                    {user && cargo == 'Cliente' ? firstName[0] :
                                        user && cargo == 'Freelancer' ? firstName[0] : 'Entrar'}</Link>
            </div>

            <div className="welcome-img"></div>
            <div className="welcome-text">
                <h1>Bem vindo ao trixer</h1>
                <p>Com o Trixer, você consegue solucionar seus problemas com eficiência e agilidade</p>
                <Link to="#">Conheça o Trixer</Link>
            </div>

            <div className="home-details">
                <div className="box-1">
                    <p>Não se preocupe!!</p>

                    <p>Procure serviços sem se preocupar com nível, o Trixer te assegura a recomendar serviços ao seu alcance.</p>
                </div>
                <div className="box-2">
                    <p>Encontre soluções!!</p>

                    <p>O Trixer possui um sistema que te ajuda a encontrar alguém que resolva seus problemas.</p>
                </div>
                <div className="box-3">
                    <p>Não fique com dúvida!!</p>

                    <p>Sempre conte conosco, estaremos a disposição para te ajudar no que for preciso.</p>
                </div>
            </div>

            <div className="home-about">
                <h1>Procure a solução de problemas que envolvam tecnologia!!!</h1>
                <img src={Sobre} />

                <p>Se você possui algum problema, e não sabe como resolver, então venha conhecer nosso site, ele propõe soluções para esses seus problemas, isso inclue Design, programação, gerenciamento de dados, e diversas outras áreas que precisam do uso da tecnologia.</p>
                <p>Indicaremos seu problema para um profissional que esteja disposto a te ajudar, e que precise de uma renda extra também.</p>
                <p>Assim os dois se ajudam e quem sabe você acaba encontrando o profissional que você precisa para sua empresa, por isso temos uma área especifica que te ajuda a montar um time.</p>

                <h2>Venha fazer parte desse time</h2>
                <Link to="#">Cadastre-se aqui</Link>
            </div>

            <div className="home-howtodo">
                <img src={Howto} />
                <div className="howtotext">
                    <h1>O procedimento é simples, escolha sua função aqui no Trixer</h1>

                    <h2 className="home-howclient">Cliente</h2>

                    <p>Caso escolha o Cliente, realize seu cadastro inserindo seus dados, que inclusive serão guardados e não enviados para ninguém, após o cadastro basta criar o serviço e negociar com algum Freelancer interessado no serviço.</p>

                    <h2 className="home-howfreela">Freelancer</h2>

                    <p>Caso sua escolha seja Freelancer, realize seu cadastro, será um pouco mais trabalhoso, pois você será avaliado e fará um teste para que possamos ver seu nível, após o teste e você for aprovado, então basta olhar os serviços que mais te interessar e enviar sua proposta.</p>
                </div>
            </div>

            <div className="home-contact" id="suporte">
                <h1>Entre em contato conosco!!!</h1>
                <div class="box-contact">
                    <label>Nome</label>

                    <input />

                    <label>Email</label>

                    <input
                        type="email" 
                    />

                    <label>Mensagem</label>

                    <textarea></textarea>

                    <button>Enviar mensagem</button>
                </div>
            </div>
            {/* <div className="home-footer">
                <FaFacebook className="icon" />
                <FaInstagram className="icon" />
                <FaLinkedin className="icon" />
                <FaTwitter className="icon" /> 
            </div> */}

        </div>

    );
}