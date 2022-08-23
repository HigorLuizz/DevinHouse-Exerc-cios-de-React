import './components/Ex01/ex01.css';
import Titulo from './components/Ex01/titulo';
import Texto from './components/Ex01/texto';
import Soma from './components/Ex02/soma';
import Button from './components/Ex06/botao';
import Children from './components/Ex01/children';
import Post from './components/Ex07/post';
import Contato from './components/Ex08/Contato';
import ListadeContatos from './components/Ex08/ListaDeContatos';
import Arquivos from './components/Ex10/RendCondicional';
import Lista from './components/Desafio01/Lista';
import Table from './components/Desafio01/Lista';
import Tabela from './components/Desafio01/Tabela';

function App() {
  const listaNomes = [
    {nome : "Higor", id: 1},
    {nome : "Ana", id: 2},
    {nome: "May", id:3}
  ]
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
      <Arquivos arquivos={listaNomes}/>
      {/* <Lista lista={listaNomes}/> */}
      <Table 
        title="Lista de alunos"
        description="Lista com dados pessoais dos alunos do curso de React"
        columns={[
          {
            name: 'Nome',
            prop: 'name'
          },
          {
            name: 'Sobrenome',
            prop: 'lastName'
          },
          {
            name: 'Idade',
            prop: 'age'
          }
        ]}
        data={[
          {
            name: 'João',
            lastName: 'Silva',
            age: 20,
            id: 1
          },
          {
            name: 'Maria',
            lastName: 'Souza',
            age: 25,
            id: 2
          },
          {
            name: 'Pedro',
            lastName: 'Oliveira',
            age: 30,
            id: 3
          }
        ]}
      />
      <Tabela/>

    </div>
  );
}

export default App;
