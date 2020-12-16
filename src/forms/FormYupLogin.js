import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  login: Yup.string().required('Required'),
  senha: Yup.string().required('Required').min(6, 'Senha muito curta').max(16, 'Senha muito longa'),
  senhaConfirmation: Yup.string().oneOf([Yup.ref('senha'), null], 'As senhas devem ser iguais')
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
      initialValues={{ login: '', senha: '', senhaConfirmation: '' }}
      onSubmit={handleSubmitting}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Email*:
            <Field type="text" name="email"
              onBlur={handleBlur}
              onChange={handleChange} />
          </label><br></br>
          <ErrorMessage name="name" className="error" component="span" />

          <label>
            Senha*:
            <Field type="password" name="senha"
              onBlur={handleBlur}
              onChange={handleChange} />
          </label><br></br>
          <ErrorMessage name="senha" className="error" component="span" />

          <label>

            Confirme a senha*:
            <Field type="password" name="senhaConfirmation"
              onBlur={handleBlur}
              onChange={handleChange} />
          </label><br></br>
          <ErrorMessage name="senhaConfirmation" className="error" component="span" />
          <br></br>

          <input type="submit" value="Login" disabled={isSubmitting} />

          <div className="App">
            <div id="imageContainer" className="image">
              <img id="image" src={logo} />
            </div>

            <div id="container">
              <a className="tile" title="CadastrarAluno" href="https://google.com/">

                <div className="tile-icon"><img src={imgAlunos} /></div>
                <div className="tile-title title-ltr"><span>Cadastrar Aluno</span></div>
              </a>

              <a className="tile" title="CadastrarProfessor" href="https://web.whatsapp.com/">

                <div className="tile-icon"><img src={imgProfessores} /></div>
                <div className="tile-title title-ltr"><span>Cadastrar Professor</span></div>
              </a>

            </div>
          </div>

        </form>


      )}
    </Formik>


  )
};

export default FormYupLogin;