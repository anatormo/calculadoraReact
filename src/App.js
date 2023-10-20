import './App.css';
import Sumar from './componentes/Sumar';
import Restar from './componentes/Restar';
import Multiplicar from './componentes/Multiplicar';
import Dividir from './componentes/Dividir';
import Operaciones from './componentes/Operaciones';


function App() {
  return (
    <div className="App">
      <Sumar/>
      <p></p>
      <Restar/>
      <p></p>
      <Multiplicar/>
      <p></p>
      <Dividir/>
      <p></p>
      <Operaciones/>
      
    </div>
  );
}

export default App;
