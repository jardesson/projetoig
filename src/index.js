import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './Home';
import App from './App';
import FormYupProfessor from './forms/FormYupProfessor';
import FormYupAluno from './forms/FormYupAluno';
import FormYupLogin from './forms/FormYupLogin';
import FormYupProjeto from './forms/FormYupProjeto';

ReactDOM.render(
  <React.StrictMode>
    <FormYupLogin />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();