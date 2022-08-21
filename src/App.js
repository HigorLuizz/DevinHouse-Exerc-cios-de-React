import './components/Ex01/ex01.css';
import Titulo from './components/Ex01/titulo';
import Texto from './components/Ex01/texto';
import Soma from './components/Ex02/soma';
import Button from './components/Ex06/botao';
import Children from './components/Ex01/children';
import Post from './components/Ex07/post';
import Contato from './components/Ex08/Contato';
import ListadeContatos from './components/Ex08/ListaDeContatos';

function App() {
  return (
    <div className="App">
      {/* <Titulo/> 
      <Texto/>
      <Soma numero1={1} numero2= {11}/> 
      <Button titulo="Qualquer outro texto" corLetra= "red" corBack= "yellow"/>
      <Children >
        <Soma numero1={1} numero2= {11}/>
      </Children>
      <Post imagemPerfil="https://thumbs.dreamstime.com/b/%C3%ADcone-de-sinal-da-mulher-em-estilo-plano-ilustra%C3%A7%C3%A3o-do-vetor-avatar-feminino-fundo-isolado-conceito-neg%C3%B3cio-rosto-157315434.jpg" 
      nomeUsuario="Higor" 
      tempoPost="5min atrás"
      texto="Texto qualquer de teste"
      imagemPost="https://receitinhas.com.br/wp-content/uploads/2022/06/cachorro-quente-tradicional-2.jpg" 
      comentarios="Comentado por Aline"/> */}
      <ListadeContatos/>

    </div>
  );
}

export default App;
