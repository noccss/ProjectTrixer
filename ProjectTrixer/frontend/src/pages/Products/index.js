import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';

import './styles.css';
import api from '../../services/api';

import Logo from '../../assets/logo.png';

export default function Products() {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    const userId = localStorage.getItem('id');
    const user = localStorage.getItem('nome');
    const cargo = localStorage.getItem('cargo');
    const cash = localStorage.getItem('cash');

    
    try{
        var firstName = user.split(" ");
    } catch(err) {

    }

    useEffect(() => {
        api.get('products', {
            headers: {
                Authorization: userId,
            }
        }).then(res => {
            setProducts(res.data);
        })
    }, [userId]);

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    async function viewDetails(id) {
        try{
            await api.get(`products`, {}).then(res => {
                setProducts(res.data);
            });

            localStorage.setItem('idProduct', id);

            history.push(`/details/${id}`);
        } catch(err){

        }
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
                            <Link to="/config/perfil" className="nav-profile">Configurações</Link>
                            <button className={user ? 'button-profile-on' : 'button-profile-off'} onClick={handleLogout}>
                                        Logout
                            </button>
                        </div>
                </div>
            </div>
        <div className="product-body">
        </div>

            <div className="product-list">
                <ul>
                    {products.map(products => (
                        <article key={products.id}>
                            <strong>{products.title}</strong>
                            <p>{products.description}</p>
                            
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(products.value)}</p>

                            <button onClick={() => viewDetails(products.id)}>Clique aqui</button>
                            
                        </article>
                    ))}
                </ul>
            
            </div>
    </div>
    );
}