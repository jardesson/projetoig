import '../Home.css';

import logo from '../imagens/logo.png';
import imgUpdate from '../imagens/update.png';
import imgRead from '../imagens/read.png';
import imgDelete from '../imagens/delete.png';
import imgVoltar from '../imagens/voltar.png';

const Aluno = () => {
    return(
    <div className="Aluno">
      <div id="imageContainer" className="imagem">
        <img id="image" alt="logo" src={logo}/>
      </div>
      <div className="texto-centrado"><h1>Gerenciador de Alunos</h1></div>
      <div id="container">
         

          <a className="tile"  title="Editar" href="/editar_aluno">

              <div className="tile-icon"><img alt="update" src={imgUpdate}/></div>
              <div className="tile-title title-ltr">Editar</div>
          </a>

          <a className="tile"  title="Visualizar" href="/visualizar_alunos">

              <div className="tile-icon"><img alt="read" src={imgRead}/></div>
              <div className="tile-title title-ltr">Visualizar</div>
          </a>

          <a className="tile"  title="Excluir" href="/excluir_aluno">

              <div className="tile-icon"><img alt="delete" src={imgDelete}/></div>
              <div className="tile-title title-ltr">Excluir</div>
          </a>

          <a className="tile"  title="Voltar" href="/home">

              <div className="tile-icon"><img alt="voltar" src={imgVoltar}/></div>
              <div className="tile-title title-ltr">Voltar</div>
          </a>
      </div>
    </div>
    );
}

export default Aluno;