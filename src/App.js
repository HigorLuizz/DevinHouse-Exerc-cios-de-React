import './components/Ex01/ex01.css';
import Titulo from './components/Ex01/titulo';
import Texto from './components/Ex01/texto';
import Soma from './components/Ex02/soma';
import Button from './components/Ex06/botao';

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Texto/>
      <Soma numero1={1} numero2= {11}/>
      <Button titulo="Qualquer outro texto" corLetra= "red" corBack= "yellow"/>

    </div>
  );
}

export default App;
