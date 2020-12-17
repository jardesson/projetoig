import './Form.css';

import { Link } from 'react-router-dom';

import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import logo from '../imagens/logo.png';

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  descricao: Yup.string().required('Required')
});

const FormYupProjeto = () => {
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
      initialValues={{ name: '', descricao: '' }}
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
              <Field type="text" name="name"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label><br></br>
            <ErrorMessage name="name" className="error" component="span" />

            <label>
              Descrição*:<br></br>
              <Field type="text" name="descricao"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label><br></br>
            <ErrorMessage name="descricao" className="error" component="span" />

            <br></br>
            <Link to="/projeto">
              <input type="submit" value="Cadastrar" disabled={isSubmitting} />
            </Link>
          </div>
        </form>
      )}
    </Formik>
  )
};

export default FormYupProjeto;