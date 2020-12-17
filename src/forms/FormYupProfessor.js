import './Form.css';

import { Link } from 'react-router-dom';
import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import logo from '../imagens/logo.png';

import axios from 'axios';

const BASE_URL = 'https://api-projeto-web.herokuapp.com/professores';

const regexMat = /\d{9}/g;
const regexEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i

const LoginSchema = Yup.object().shape({
  nome: Yup.string().required('Required'),
  matricula: Yup.string().matches(regexMat, "Matrícula inválida").length(9, "Matrícula deve ter 9 dígitos").required('Required'),
  formacao: Yup.string().required('Required'),
  atuacao: Yup.string().required('Required'),
  email: Yup.string().email(regexEmail, "Email inválido").required('Required'),
  password: Yup.string().required('Required').min(6, 'A Senha deve conter no mínimo 6 caracteres').max(16, 'A Senha deve conter no máximo 16 caracteres'),
  senhaConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais').required('Required')
});

const FormYupProfessor = () => {
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
        alert("Cadastrado com sucesso!");
        window.location.href="/home";
      }).catch(error => {
        console.log("Status: "+error.status+" - Message: "+error.message);
        alert("Erro ao cadastrar!");
      });
      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400);
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialStatus={{ isValidating: false }}
      initialValues={{ nome: '', matricula: '', formacao: '', atuacao: '', email: '', password: '', senhaConfirmation: '' }}
      onSubmit={handleSubmitting}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div id="imageContainer" className="image">
            <img id="image" alt="logo" src={logo} />
          </div>
          <br></br>
          <div id="formulario">
            <h1>Cadastro de Professores</h1>
            <label>
              Nome*:<br></br>
              <Field type="text" name="nome"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="nome" className="error" component="span" />
            <br></br>
            <label>
              Matrícula*:<br></br>
              <Field type="text" name="matricula"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="matricula" className="error" component="span" />
            <br></br>
            

            <label>
              Formação*:<br></br>
              <Field type="text" name="formacao"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="formacao" className="error" component="span" />
            <br></br>
            <label>
              Área de atuação*:<br></br>
              <Field type="text" name="atuacao"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="atuacao" className="error" component="span" />
            
            <br></br>


            <label>
              Email*:<br></br>
              <Field type="text" name="email"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="email" className="error" component="span" />
            <br></br>

            <label>
              Senha*:<br></br>
              <Field type="password" name="password"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="password" className="error" component="span" />
            <br></br>

            <label>
              Confirme a senha*:<br></br>
              <Field type="password" name="senhaConfirmation"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="senhaConfirmation" className="error" component="span" />
            <br></br><br></br><br></br>
            
            <input type="submit" value="Cadastrar" disabled={isSubmitting} />
            
            <Link to="/login">
              <button>Cancelar</button>
            </Link>
          </div>
        </form>
      )}
    </Formik>
  )
};

export default FormYupProfessor;
/*
<Link to="/home">
  <input type="submit" value="Cadastrar" disabled={isSubmitting} />
</Link>*/