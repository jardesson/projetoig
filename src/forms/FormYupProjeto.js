import './Form.css';

import { Link } from 'react-router-dom';

import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import logo from '../imagens/logo.png';

import axios from 'axios';

const BASE_URL = 'https://api-projeto-web.herokuapp.com/projetos';
const TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJleHAiOjE2MDgyOTc2NTJ9.hXWyXA5wPrYym3CMqBf0MmcTk7NJ5T-fIoUahhIgUTvZ6rfAmueuPK9uZtK2zIhn5SnOdokXBIVjT8qyW27Wkw';

const LoginSchema = Yup.object().shape({
  nome: Yup.string().required('Required'),
  descricao: Yup.string().required('Required')
});

const FormYupProjeto = () => {
  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    setTimeout(() => {
      console.info(JSON.stringify(values, null, 2));

      axios({
        url: BASE_URL, 
        data: JSON.stringify(values),
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
            Authorization: TOKEN
        }
      })
      .then(res => {
        console.log("Status: "+res.status+" - Message: "+res.message);
        alert("Projeto cadastrado com sucesso!");
        window.location.href="/projeto";
      }).catch(error => {
        console.log("Status: "+error.status+" - Message: "+error.message);
        alert("Erro ao cadastrar projeto!");
      });

      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400);
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialStatus={{ isValidating: false }}
      initialValues={{ nome: '', descricao: '' }}
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
            <h1>Cadastro de Projetos</h1>
            <label>
              Nome*:<br></br>
              <Field type="text" name="nome"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label><br></br>
            <ErrorMessage name="nome" className="error" component="span" />

            <label>
              Descrição*:<br></br>
              <Field type="text" name="descricao"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label><br></br>
            <ErrorMessage name="descricao" className="error" component="span" />

            <br></br>
            <input type="submit" value="Cadastrar" disabled={isSubmitting} />

            <Link to="/projeto">
              <button>Voltar</button>
            </Link>
          </div>
        </form>
      )}
    </Formik>
  )
};

export default FormYupProjeto;