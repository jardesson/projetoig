import './Home.css';

import { Link } from 'react-router-dom';

import logo from './imagens/logo.png';
import imgAlunos from './imagens/alunos.png';
import imgProfessores from './imagens/professores.png';
import imgProjetos from './imagens/projetos.png';
import imgSobre from './imagens/sobre.png';

import FormYupAluno from './forms/FormYupAluno';
import FormYupProfessor from './forms/FormYupProfessor';
import FormYupProjeto from './forms/FormYupProjeto';
import FormYupLogin from './forms/FormYupLogin';

const Home = () => {
    return(
    <div className="Home">
      <div id="imageContainer" className="imagem">
        <img id="image" src={logo}/>
      </div>

      <div id="container">
          <a className="tile"  title="Alunos" href="/aluno">

              <div className="tile-icon"><img src={imgAlunos}/></div>
              <div className="tile-title title-ltr"><Link to="/aluno">Alunos</Link></div>
          </a>

          <a className="tile"  title="Professores" href="/professor">

              <div className="tile-icon"><img src={imgProfessores}/></div>
              <div className="tile-title title-ltr"><Link to="/professor">Professores</Link></div>
          </a>

          <a className="tile"  title="Projetos" href="/projeto">

              <div className="tile-icon"><img src={imgProjetos}/></div>
              <div className="tile-title title-ltr"><Link to="/projeto">Projetos</Link></div>
          </a>

          <a className="tile"  title="Sobre" href="/sobre">

              <div className="tile-icon"><img src={imgSobre}/></div>
              <div className="tile-title title-ltr"><Link to="/sobre">Sobre</Link></div>
          </a>
      </div>
    </div>
    );
}

export default Home;