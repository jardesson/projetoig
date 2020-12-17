import './Form.css';

import { Link } from 'react-router-dom';

import logo from '../imagens/logo.png';
import imgAlunos from '../imagens/alunos.png';
import imgProfessores from '../imagens/professores.png';
import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  senha: Yup.string().required('Required'),
  
});

const FormYupLogin = () => {
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
      initialValues={{ email: '', senha: '' }}
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
              <img id="image" src={logo} />
          </div>
          <br></br>

          <div id="formulario">
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
          
          <Link to="/home">
            <input type="submit" value="Login" disabled={isSubmitting} />
          </Link>
          </div>

          <div className="App">
            
            <div id="container">
              <a className="tile" title="CadastrarAluno" href="/cadastrar_aluno">

                <div className="tile-icon"><img src={imgAlunos} /></div>
                <div className="tile-title title-ltr"><Link to="/cadastrar_aluno">Cadastrar Aluno</Link></div>
              </a>

              <a className="tile" title="CadastrarProfessor" href="/cadastrar_professor">

                <div className="tile-icon"><img src={imgProfessores} /></div>
                <div className="tile-title title-ltr"><Link to="/cadastrar_professor">Cadastrar Professor</Link></div>
              </a>

            </div>
          </div>

        </form>


      )}
    </Formik>


  )
};

export default FormYupLogin;