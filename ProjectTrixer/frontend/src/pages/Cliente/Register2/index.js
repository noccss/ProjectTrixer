import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaCity, FaGlobeAmericas, FaClipboardList } from 'react-icons/fa';

import './styles.css';

import api from '../../../services/api';

import wave from '../../../assets/Register/waves.png';
import Source from '../../../assets/Register/source.svg';
import Avatar from '../../../assets/Register/avatar.svg';


export default function Register2(){
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const userId = localStorage.getItem('id');

    const history = useHistory();

    async function handleRegisterCliente(e){
        e.preventDefault();

        try{
            const data = ({
                city,
                uf,
                whatsapp
            });

            const res = await api.post('cliente2', data, {
                headers: {
                    Authorization: userId
                }
            });

            history.push('/registerClientPic');
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
                <form onSubmit={handleRegisterCliente}>
                    <div class="line-register">
                        <div class="circle-regis1">
                            <h3>1</h3>
                        </div>

                        <div class="line-regis1">

                        </div>
                        <div class="circle-regis1">
                            <h3>2</h3>
                        </div>

                        <div class="line-regis2">

                        </div>
                        <div class="circle-regis3">
                            <h3>3</h3>
                        </div>
                    </div>
                    <div class="input-div one">
                    <div class="i">
                            <i class="fas fa-user"><FaCity /></i>
                    </div>
                    <div class="div">
                            <input 
                                type="text" 
                                class="input" 
                                placeholder="cidade"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                    </div>
                    </div>

                    <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-mobile"><FaGlobeAmericas /></i>
                        </div>
                        <div class="div">
                                <input 
                                    type="text" 
                                    class="input" 
                                    placeholder="uf"
                                    value={uf}
                                    onChange={e => setUf(e.target.value)}
                                />
                        </div>
                    </div>

                    <div class="input-div one">
                        <div class="i">
                                <i class="fas fa-mobile"><FaClipboardList /></i>
                        </div>
                        <div class="div">
                                <input 
                                    type="text" 
                                    class="input" 
                                    placeholder="Celular"
                                    value={whatsapp}
                                    onChange={e => setWhatsapp(e.target.value)}
                                />
                        </div>
                    </div>

                    <input type="submit" class="btn-register" value="Proxima etapa" />
                </form>
            </div>
        </div>
    </div>
    );
}