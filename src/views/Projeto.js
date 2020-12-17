import '../Home.css';

import logo from '../imagens/logo.png';
import imgCreate from '../imagens/create.png';
import imgUpdate from '../imagens/update.png';
import imgRead from '../imagens/read.png';
import imgDelete from '../imagens/delete.png';
import imgVoltar from '../imagens/voltar.png';

const Projeto = () => {
    return (
        <div className="Projeto">
            <div id="imageContainer" className="imagem">
                <img id="image" alt="logo" src={logo} />
            </div>
            <div className="texto-centrado"><h1>Gerenciador de Projetos</h1></div>
            <div id="container">

                <a className="tile" title="Cadastrar" href="/cadastrar_projeto">

                    <div className="tile-icon"><img alt="create" src={imgCreate} /></div>
                    <div className="tile-title title-ltr">Cadastrar</div>
                </a>
                
                <a className="tile" title="Editar" href="/editar_projeto">

                    <div className="tile-icon"><img alt="update" src={imgUpdate} /></div>
                    <div className="tile-title title-ltr">Editar</div>
                </a>

                <a className="tile" title="Visualizar" href="/visualisar_projetos">

                    <div className="tile-icon"><img alt="read" src={imgRead} /></div>
                    <div className="tile-title title-ltr">Visualizar</div>
                </a>

                <a className="tile" title="Excluir" href="/deletar_projeto">

                    <div className="tile-icon"><img alt="delete" src={imgDelete} /></div>
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

export default Projeto;