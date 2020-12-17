import './Form.css';

import { Link } from 'react-router-dom';
import Home from '../Home';
import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import logo from '../imagens/logo.png';

const regexMat = /\d{9}/g;
const regexEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  matricula: Yup.string().matches(regexMat, "Matrícula inválida").length(9, "Matrícula deve ter 9 dígitos").required('Required'),
  formacao: Yup.string().required('Required'),
  area: Yup.string().required('Required'),
  email: Yup.string().email(regexEmail, "Email inválido").required('Required'),
  senha: Yup.string().required('Required').min(6, 'A Senha deve conter no mínimo 6 caracteres').max(16, 'A Senha deve conter no máximo 16 caracteres'),
  senhaConfirmation: Yup.string().oneOf([Yup.ref('senha'), null], 'As senhas devem ser iguais').required('Required')
});

const FormYupProfessor = () => {
  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    setTimeout(() => {
      console.info(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400);
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialStatus={{ isValidating: false }}
      initialValues={{ name: '', matricula: '', formacao: '', area: '', email: '', senha: '', senhaConfirmation: '' }}
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
            <img id="image" src={logo} />
          </div>
          <br></br>
          <div id="formulario">
            <h1>Cadastro de Professores</h1>
            <label>
              Nome*:<br></br>
              <Field type="text" name="name"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="name" className="error" component="span" />
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
              <Field type="text" name="area"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="area" className="error" component="span" />
            
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
              <Field type="password" name="senha"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="senha" className="error" component="span" />
            <br></br>

            <label>
              Confirme a senha*:<br></br>
              <Field type="password" name="senhaConfirmation"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="senhaConfirmation" className="error" component="span" />
            <br></br><br></br><br></br>

            <Link to="/home">
              <input type="submit" value="Cadastrar" disabled={isSubmitting} />
            </Link>
            
            <Link to="/init">
              <button>Cancelar</button>
            </Link>
          </div>
        </form>
      )}
    </Formik>
  )
};

export default FormYupProfessor;