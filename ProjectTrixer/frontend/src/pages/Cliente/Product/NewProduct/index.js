import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../../../services/api';

import './styles.css';

export default function NewProduct() {
    //Lembrar de colocar o nome do cliente
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [skills, setSkills] = useState('');

    const history = useHistory();

    const userId = localStorage.getItem('id');

    async function handleRegisterProduct(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
            skills
        };

        try{
            await api.post('Products', data, {
                headers: {
                    Authorization: userId,
                }
            });

            history.push('/product');
        } catch(err) {
            alert('Erro ao criar um novo serviço, por favor tente novamente mais tarde');
        }
    }

    return(
        <div>
            <div className="box-product-new">
            <Link to="/profile"><FaArrowLeft />Voltar</Link>
                <form onSubmit={handleRegisterProduct}>
                    <label>Titulo</label>
                    <input 
                        placeholder="Digite o titulo do serviço"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    
                    <label>Descrição</label>
                    <textarea
                        placeholder="Digite a descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <label>Valor</label>
                    <input
                        type="number"
                        placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <label>Preferencias</label>
                    <textarea
                        value={skills}
                        onChange={e => setSkills(e.target.value)}
                    ></textarea>

                    <button type="submit">
                        Cadastrar Serviço
                    </button>
                </form>
            </div>
        </div>
    );
}