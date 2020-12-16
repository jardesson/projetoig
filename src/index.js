import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import FormYupProfessor from './FormYupProfessor';
import FormYupAluno from './FormYupAluno';
import FormYupLogin from './FormYupLogin';
import FormYupProjeto from './FormYupProjeto';

ReactDOM.render(
  <React.StrictMode>
    <FormYupProfessor />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();