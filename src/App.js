import React from 'react';

import Sobre from './views/Sobre';
import Home from './Home';

import Aluno from './views/Aluno';
import Professor from './views/Professor';
import Projeto from './views/Projeto';
import ListAlunos from './views/ListAlunos';
import ListProfessor from './views/ListProfessor';

import FormYupAluno from './forms/FormYupAluno';
import FormYupProfessor from './forms/FormYupProfessor';
import FormYupProjeto from './forms/FormYupProjeto';
import FormYupLogin from './forms/FormYupLogin';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => (

    <Router>
        <Switch>
            <Route path="/login">
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

            <Route path="/visualizar_alunos">
                <ListAlunos />
            </Route>

            <Route path="/cadastrar_professor">
                <FormYupProfessor />
            </Route>

            <Route path="/professor">
                <Professor />
            </Route>

            <Route path="/visualizar_professores">
                <ListProfessor />
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