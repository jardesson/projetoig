import './Home.css';

import logo from './imagens/logo.png';
import imgAlunos from './imagens/alunos.png';
import imgProfessores from './imagens/professores.png';
import imgProjetos from './imagens/projetos.png';
import imgSobre from './imagens/sobre.png';

const Home = () => {
    return(
    <div className="App">
      <div id="imageContainer" className="image">
        <img id="image" src={logo}/>
      </div>

      <div id="container">
          <a className="tile"  title="Alunos" href="https://google.com/">

              <div className="tile-icon"><img src={imgAlunos}/></div>
              <div className="tile-title title-ltr"><span>Alunos</span></div>
          </a>

          <a className="tile"  title="Professores" href="https://web.whatsapp.com/">

              <div className="tile-icon"><img src={imgProfessores}/></div>
              <div className="tile-title title-ltr"><span>Professores</span></div>
          </a>

          <a className="tile"  title="Projetos" href="https://web.whatsapp.com/">

              <div className="tile-icon"><img src={imgProjetos}/></div>
              <div className="tile-title title-ltr"><span>Projetos</span></div>
          </a>

          <a className="tile"  title="Sobre" href="https://web.whatsapp.com/">

              <div className="tile-icon"><img src={imgSobre}/></div>
              <div className="tile-title title-ltr"><span>Sobre</span></div>
          </a>
      </div>
    </div>
    );
}

export default Home;