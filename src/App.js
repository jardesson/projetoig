import React from 'react';

import Sobre from './Sobre';
import Home from './Home';

import FormYupAluno from './forms/FormYupAluno';
import FormYupProfessor from './forms/FormYupProfessor';
import FormYupProjeto from './forms/FormYupProjeto';
import FormYupLogin from './forms/FormYupLogin';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (

    <Router>
        <Switch>
            <Route path="/home">
                <Home/>
            </Route>
        
            <Route path="/alunos">
                <FormYupAluno />
            </Route>

            <Route path="/professores">
                <FormYupProfessor />
            </Route>

            <Route path="/projetos">
                <FormYupProjeto />
            </Route>

            <Route path="/sobre">
                <Sobre />
            </Route>
        </Switch>
    </Router>
);

export default App;