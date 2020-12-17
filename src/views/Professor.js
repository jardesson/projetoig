import '../Home.css';

import logo from '../imagens/logo.png';
import imgUpdate from '../imagens/update.png';
import imgRead from '../imagens/read.png';
import imgDelete from '../imagens/delete.png';

const Professor = () => {
    return(
    <div className="Professor">
      <div id="imageContainer" className="imagem">
        <img id="image" alt="logo" src={logo}/>
      </div>
      <div className="texto-centrado"><h1>Gerenciador de Professores</h1></div>
      <div id="container">
         

          <a className="tile"  title="Editar" href="/editar_professor">

              <div className="tile-icon"><img alt="update" src={imgUpdate}/></div>
              <div className="tile-title title-ltr">Editar</div>
          </a>

          <a className="tile"  title="Visualizar" href="/visualizar_professores">

              <div className="tile-icon"><img alt="read" src={imgRead}/></div>
              <div className="tile-title title-ltr">Visualizar</div>
          </a>

          <a className="tile"  title="Excluir" href="/deletar_professor">

              <div className="tile-icon"><img alt="delete" src={imgDelete}/></div>
              <div className="tile-title title-ltr">Excluir</div>
          </a>
      </div>
    </div>
    );
}

export default Professor;