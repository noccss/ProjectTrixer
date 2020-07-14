import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Choice() {
    return(
        <div className="choice-page">
            <div className="choice-content">    
                <h1>Bem vindo ao Trixer</h1>
                <p>
                    Por favor, antes de realizar o cadastro, selecione caso seja um Cliente ou FreeLancer
                </p>

                <Link to="/registerClient">Cliente</Link>
                <Link to="/registerFreelancer">FreeLancer</Link>
            </div>
        </div>
    );
}