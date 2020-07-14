import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaAlignRight, FaLinkedin, FaFacebook } from 'react-icons/fa';

import './styles.css';

import api from '../../../services/api';

import wave from '../../../assets/Register/waves.png';
import Source from '../../../assets/Register/source.svg';
import Avatar from '../../../assets/Register/avatar.svg';

export default function Register3(){
    const [picture, setPicture] = useState('');
    const [bio, setBio] = useState('');
    const [facebook, setFacebook] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const userId = localStorage.getItem('id');

    const history = useHistory();

    async function handleRegisterFreelancer(e){
        e.preventDefault();

        try{
            const data = ({
                picture,
                bio,
                facebook,
                linkedin
            });

            const res = await api.post('freelancer3', data, {
                headers: {
                    Authorization: userId
                }
            });

            alert(`Seja Bem vindo, seu cargo atual é: Freelancer`);

            history.push('/login');
        } catch(erro){
            alert('Erro ao se cadastrar');
        }
    }

    return(

    <div className="body-register">
        <img class="wave" src={wave} />
        <div class="container-registerScreen">
            <div class="img-registerScreen">
                <img src={Source} />
            </div>
            <div class="register-content">
                <form onSubmit={handleRegisterFreelancer}>
                    <div class="line-register">
                        <div class="circle-regis1">
                            <h3>1</h3>
                        </div>

                        <div class="line-regis1">

                        </div>
                        <div class="circle-regis1">
                            <h3>2</h3>
                        </div>

                        <div class="line-regis1">

                        </div>
                        <div class="circle-regis1">
                            <h3>3</h3>
                        </div>
                    </div>
                        <img src={Avatar} />
                            <input 
                                type="file"
                                className="change-img"
                                id="file"
                                value={picture}
                                onChange={e => setPicture(e.target.value)}
                            />
                            <label for="file">Escolha uma foto de perfil</label>

                    <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-mobile"><FaAlignRight /></i>
                        </div>
                        <div class="div">
                                <textarea
                                    type="text" 
                                    class="input" 
                                    placeholder="biografia"
                                    value={bio}
                                    onChange={e => setBio(e.target.value)}
                                />
                        </div>
                    </div>

                    <div class="input-div one">
                        <div class="i">
                                <i class="fas FaAlignRight-mobile"><FaFacebook /></i>
                        </div>
                        <div class="div">
                                <input 
                                    type="text" 
                                    class="input" 
                                    placeholder="Facebook"
                                    value={facebook}
                                    onChange={e => setFacebook(e.target.value)}
                                />
                        </div>
                    </div>

                    <div class="input-div one">
                        <div class="i">
                                <i class="fas FaAlignRight-mobile"><FaLinkedin /></i>
                        </div>
                        <div class="div">
                                <input 
                                    type="text" 
                                    class="input" 
                                    placeholder="Linkedin"
                                    value={linkedin}
                                    onChange={e => setLinkedin(e.target.value)}
                                />
                        </div>
                    </div>

                    <input type="submit" class="btn-register" value="Cadastrar" />
                </form>
            </div>
        </div>
    </div>
    );
}