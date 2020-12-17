import './Form.css';

import logo from '../imagens/logo.png';
import imgAlunos from '../imagens/alunos.png';
import imgProfessores from '../imagens/professores.png';
import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';

const BASE_URL = 'https://api-projeto-web.herokuapp.com/login';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const FormYupLogin = () => {
  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    setTimeout(() => {
      console.info(JSON.stringify(values, null, 2));

      axios({
        url: BASE_URL, 
        data: JSON.stringify(values),
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        console.log("Status: "+res.status+" - Message: "+res.message);
        alert("Login efetuado com sucesso!");
        window.location.href="/home";
      }).catch(error => {
        console.log("Status: "+error.status+" - Message: "+error.message);
        alert("Email ou Senha inválidos!");
      });
      
      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400);
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialStatus={{ isValidating: false }}
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmitting}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form  onSubmit={handleSubmit}>
          <div id="imageContainer" className="image">
              <img id="image" alt="logo" src={logo} />
          </div>
          <br></br>

          <div id="formulario">
          <h1>Entre com sua conta</h1>
            <label>
              Email*:<br></br>
              <Field type="text" name="email"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="email" className="error" component="span" />
            <br></br><br></br>

            <label>
              Senha*:<br></br>
              <Field type="password" name="password"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="password" className="error" component="span" />
            <br></br><br></br>
            <input type="submit" value="Login" disabled={isSubmitting} />
          </div>

          <div className="App">
            
            <div id="container">
              <a className="tile" title="CadastrarAluno" href="/cadastrar_aluno">
                <div className="tile-icon"><img alt="alunos" src={imgAlunos} /></div>
                <div className="tile-title title-ltr">Cadastrar Aluno</div>
              </a>

              <a className="tile" title="CadastrarProfessor" href="/cadastrar_professor">
                <div className="tile-icon"><img alt="professores" src={imgProfessores} /></div>
                <div className="tile-title title-ltr">Cadastrar Professor</div>
              </a>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
};

export default FormYupLogin;