import React from 'react';

import Sobre from './Sobre';
import Home from './Home';

import Aluno from './atores/Aluno';
import Professor from './atores/Professor';
import Projeto from './atores/Projeto';

import FormYupAluno from './forms/FormYupAluno';
import FormYupProfessor from './forms/FormYupProfessor';
import FormYupProjeto from './forms/FormYupProjeto';
import FormYupLogin from './forms/FormYupLogin';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (

    <Router>
        <Switch>

            <Route path="/init">
                <FormYupLogin/>
            </Route>

            <Route path="/home">
                <Home/>
            </Route>

            <Route path="/sobre">
                <Sobre />
            </Route>

            <Route path="/cadastrar_aluno">
                <FormYupAluno/>
            </Route>
        
            <Route path="/aluno">
                <Aluno />
            </Route>

            <Route path="/cadastrar_professor">
                <FormYupProfessor />
            </Route>

            <Route path="/professor">
                <Professor />
            </Route>

            <Route path="/cadastrar_projeto">
                <FormYupProjeto />
            </Route>

            <Route path="/projeto">
                <Projeto />
            </Route>
            
        </Switch>
    </Router>
);

export default App;