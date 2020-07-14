import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaComments, FaEnvelope, FaBell, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import './styles.css';

import api  from '../../../services/api';

import Padrao from '../../../assets/Login/avatar.svg';

import Avatar from '../../../assets/Users/profile.jpg';

import Ari from '../../../assets/Users/Ari.jpg';

import Logo from '../../../assets/logo.png';

export default function Profile() {
    const [profile, setProfile] = useState([]);
    const history = useHistory();

    const userId = localStorage.getItem('id');
    var user = localStorage.getItem('nome');
    const cash = localStorage.getItem('cash');

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

        var firstName = user.split(" ");

    return(
        <div className="profile-perfil">
        <div className="header-profile">
            <Link to='/'>
                <img className="header-img-profile" src={Logo} />
            </Link>

            <div className="nav-bar-profile">
                <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(cash)}</p>
                <Link to="/contatos" className="nav-profile"><FaComments style={{fontSize: 30}} /></Link>
                <Link to="/product" className="nav-profile">Serviços</Link>
                <Link to="/config/perfil" className="nav-profile">Configurações</Link>
                <button className={user ? 'button-profile-on' : 'button-profile-off'} onClick={handleLogout}>
                            Logout
                </button>
            </div>
        </div>
           {profile.map(profile => (
               <div className="profile-card">

                   <div className="top-section">
                       <FaEnvelope className="message" />
                       <FaBell className="notif" />
                       <div className="pic">
                           <img src={firstName[0] == 'Nícolas' ? Avatar : firstName[0] == 'Ariane' ? Ari : Padrao} alt="" />
                       </div>
                       <div className="name">{profile.nome} {profile.sobrenome}</div>
                       <div className="tag">{profile.cargo}</div>
                       <div className="bio">{profile.bio}</div>
                   </div>

                   <div className="bottom-section">
                       <div className="social-media">
                           <a href={profile.facebook ? profile.facebook : '#'}><FaFacebook className="fab" /></a>
                            <a href={profile.linkedin ? profile.linkedin : '#'}><FaLinkedin className="fab" /></a>
                       </div>

                       {/* <div className="services-profile">190 <span>Services</span></div>
                       <div className="border"></div>
                       <div className="complete-profile">204K <span>Completos</span></div>
                       <div className="border"></div>
                       <div className="contacts-profile">7.3M <span>Contatos</span></div> */}
                   </div>
               </div>
           ))}
       </div>
    );
}