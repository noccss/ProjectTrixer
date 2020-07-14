import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';

import api from '../../../services/api';

import Logo from '../../../assets/logo.png';

import './styles.css';

export default function TermsAndCondition(){
    const user = localStorage.getItem('nome');
    const cash = localStorage.getItem('cash');
    const cargo = localStorage.getItem('cargo');

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

            <div className="define-terms">
                <div className="config-bars">
                    <ul>
                        <a href="/config/perfil"><li>Informações pessoais</li></a>
                        <a href="/config/payment"><li>Formas de recebimento</li></a>
                        <a href="/config/rank"><li>Rank Atual</li></a>
                        <a href="/config/termsAndCondition"><li>Termos e condições</li></a>
                    </ul>
                </div>

                <div className="box-terms">
                    <h1>Termos e Condições</h1>

                    <h2>01. Introdução</h2>
                    <p>
                        Muito Obrigado por contar conosco, estamos sempre a disposição para nossos clientes, pois são eles que nos
                        incentivam a criar nossos projetos, um sentido para nossa profissão como desenvolvedores, portanto esse projetos
                        vem com o intuito de ajuda-los e receber ajuda como forma de nos mantermos sempre na ativa.
                    </p>
                    <p>
                        O aplicativo já vem de maneira prática e efetiva, para que tanto o Cliente como o Freelancer possam ter ótimas 
                        experiências, mas para cuidar sempre dos minimos detalhes ou erros que possam ocorrer, você pode recorrer a central 
                        de ajuda que estamos disponivel no inicio da página, basta nos enviar um email que iremos responder assim que possível
                    </p>
                    <p>
                        Para começar você deve estar ciente que seus dados estarão seguros conosco, então esperamos que você não compartilhe 
                        com mais ninguém além dos cadastros iniciais, se você ver alguma atividade estranha ou alguém solicitou seus dados 
                        mande um email para a gente, que o responsável irá tomar as medidas necessárias.
                    </p>

                    <h2>02. Objetivo</h2>
                    <p>
                        O objetivo do projeto é que você caso seja Cliente, solicite serviços com base na sua necessidade, seja ela na área de 
                        design, ou programação. Não recomendamos a ida de Freelancers até a residência do Cliente, para que seja evitado problemas 
                        maiores, caso seja necessário, novamente mande uma mensagem para o suporte para que possamos avaliar e analisar o caso para 
                        que o Freelancer e o Cliente se sintam seguros.
                    </p>
                    <p>
                        Tudo é designado pelo Cliente, pagamentos, requisitos e valores, mas lembrando que durante a negociação é possivel recorrer 
                        a uma troca de valores caso não ache isso justo, então o Freelancer junto com o Cliente, procuram juntos a melhor solução para 
                        o caso.
                    </p>
                    
                    <h2>Privacidade</h2>
                    <p>
                        Não compartilhe informações com ninguém, evite enviar mensagens por outras plataformas, como por exemplo Whatsapp, Facebook e 
                        outras plataformas, caso ocorra, não seremos responsáveis por qualquer situação, e não podemos ajudar ou comprovar algo caso 
                        ocorra uma quebra de contrato entre o Cliente e Freelancer, por isso, recomendamos que você use nossa plataforma de Chat para 
                        que possamos te ajudar da melhor maneira possível.
                    </p>

                    <h2>Quebra de Contrato</h2>
                    <p>Quebra de contrato pode incluir diversos fatores, mas existem regras e elas devem ser cumpridas, por isso caso ocorra essa quebra 
                        o usuário será banido permanente, ou por um determinado período do aplicativo.</p>
                    <u>
                        <li>Cliente se recusar a realizar o pagamento.</li>
                        <li>Cliente criar serviços ofensivos/ou preconceituosos.</li>
                        <li>Cliente ou Freelancer faltar com respeito ou agir de forma ofensiva/ou preconceituosa.</li>
                        <li>Freelancer se recusar a entregar o projeto.</li>
                    </u>
                    
                    <p style={{marginTop: 20, marginLeft: 0}}>
                        Com excessão desses casos o uso do aplicativo é livre.
                    </p>
                </div>
            </div>
        </div>
    );
}