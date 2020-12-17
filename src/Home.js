import './Home.css';

import logo from './imagens/logo.png';
import imgAlunos from './imagens/alunos.png';
import imgProfessores from './imagens/professores.png';
import imgProjetos from './imagens/projetos.png';
import imgSobre from './imagens/sobre.png';
import imgVoltar from './imagens/voltar.png';

const Home = () => {
    return(
    <div className="Home">
      <div id="imageContainer" className="imagem">
        <img id="image" alt="logo" src={logo}/>
      </div>

      <div id="container">
          <a className="tile"  title="Alunos" href="/aluno">
              <div className="tile-icon"><img alt="alunos" src={imgAlunos}/></div>
              <div className="tile-title title-ltr">Alunos</div>
          </a>
          <a className="tile"  title="Professores" href="/professor">

              <div className="tile-icon"><img alt="professores" src={imgProfessores}/></div>
              <div className="tile-title title-ltr">Professores</div>
          </a>

          <a className="tile"  title="Projetos" href="/projeto">

              <div className="tile-icon"><img alt="projetos" src={imgProjetos}/></div>
              <div className="tile-title title-ltr">Projetos</div>
          </a>

          <a className="tile"  title="Sobre" href="/sobre">

              <div className="tile-icon"><img alt="sobre" src={imgSobre}/></div>
              <div className="tile-title title-ltr">Sobre</div>
          </a>

          <a className="tile"  title="Sair" href="/login">

              <div className="tile-icon"><img alt="sair" src={imgVoltar}/></div>
              <div className="tile-title title-ltr">Sair</div>
          </a>
      </div>
    </div>
    );
}

export default Home;