import '../Home.css';

import { Link } from 'react-router-dom';

import logo from '../imagens/logo.png';
import imgCreate from '../imagens/create.png';
import imgUpdate from '../imagens/update.png';
import imgRead from '../imagens/read.png';
import imgDelete from '../imagens/delete.png';

import FormYupAluno from '../forms/FormYupAluno';
import FormYupProfessor from '../forms/FormYupProfessor';
import FormYupProjeto from '../forms/FormYupProjeto';
import FormYupLogin from '../forms/FormYupLogin';

const Professor = () => {
    return(
    <div className="Professor">
      <div id="imageContainer" className="imagem">
        <img id="image" src={logo}/>
      </div>
      <div className="texto-centrado"><h1>Gerenciador de Professores</h1></div>
      <div id="container">
         

          <a className="tile"  title="Editar" href="/">

              <div className="tile-icon"><img src={imgUpdate}/></div>
              <div className="tile-title title-ltr"><Link to="/">Editar</Link></div>
          </a>

          <a className="tile"  title="Visualizar" href="/">

              <div className="tile-icon"><img src={imgRead}/></div>
              <div className="tile-title title-ltr"><Link to="/">Visualizar</Link></div>
          </a>

          <a className="tile"  title="Excluir" href="/">

              <div className="tile-icon"><img src={imgDelete}/></div>
              <div className="tile-title title-ltr"><Link to="/">Excluir</Link></div>
          </a>
      </div>
    </div>
    );
}

export default Professor;