import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from './pages/Inicio';

import Login from './pages/Login';
import Choice from './pages/Choice';

import RegisterClient from './pages/Cliente/Register';
import RegisterClient2 from './pages/Cliente/Register2';
import RegisterClient3 from './pages/Cliente/Register3';
import Profile from './pages/Cliente/Profile';
import NewProduct from './pages/Cliente/Product/NewProduct';
import Details from './pages/Products/Details';

import RegisterFreelancer from './pages/FreeLancer/Register';
import RegisterFreelancer2 from './pages/FreeLancer/Register2';
import RegisterFreelancer3 from './pages/FreeLancer/Register3';
import ProfileFreelancer from './pages/FreeLancer/Profile';

import Product from './pages/Products';

import Message from './pages/Chat/Message';
import Contatos from './pages/Chat/Contatos';

import ConfigProfile from './pages/ConfigProfile/Profile';
import ConfigCard from './pages/ConfigProfile/RegisterCard';
import configPlano from './pages/ConfigProfile/Plano';
import ConfigTermsAndCondition from './pages/ConfigProfile/TermsAndCondition';

import ProjectChat from './pages/Chat/Project';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicio} />

                <Route path='/login' component={Login} />
                <Route path='/choice' component={Choice} />

                <Route path='/registerClient' component={RegisterClient} />
                <Route path='/registerClientLocal' component={RegisterClient2} />
                <Route path='/registerClientPic' component={RegisterClient3} />
                <Route path='/profile' component={Profile} />
                <Route path='/newproduct' component={NewProduct} />

                <Route path='/registerFreelancer' component={RegisterFreelancer} />
                <Route path='/registerFreelancerSkills' component={RegisterFreelancer2} />
                <Route path='/registerFreelancerPic' component={RegisterFreelancer3} />
                <Route path='/profileFreelancer' component={ProfileFreelancer} />

                <Route path='/product' component={Product} />
                <Route path='/details/:id' component={Details} />

                <Route path='/chat' exact component={Message} />
                <Route path='/contatos' component={Contatos} />

                <Route path='/config/perfil' component={ConfigProfile} />
                <Route path='/config/payment' component={ConfigCard} />
                <Route path='/config/rank' component={configPlano} />
                <Route path='/config/termsAndCondition' component={ConfigTermsAndCondition} />

                <Route path='/chat/projeto' component={ProjectChat} />

            </Switch>
        </BrowserRouter>
    );
}