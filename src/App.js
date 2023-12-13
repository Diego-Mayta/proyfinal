import './App.css';
import {BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom'
import Navar from './components/navegacion/Navar';
import Lapaz from './components/paginas/Lapaz';
import Oruro from './components/paginas/Oruro';
import Potosi from './components/paginas/Potosi';
import Cochabamba from './components/paginas/Cochabamba';
import Sucre from './components/paginas/Sucre';
import Tarija from './components/paginas/Tarija';
import Pando from './components/paginas/Pando';
import Beni from './components/paginas/Beni';
import Santacruz from './components/paginas/Santacruz';
import Inicio from './components/paginas/Inicio';
import Formulario from './components/paginas/Formulario';
import Creditos from './components/paginas/Creditos';
import Login from './components/paginas/Login';
import Sing from './components/paginas/Sing';
function App() {
  return (
    <div className="App">
    
    <Router>
      <Navar/>
      
      <Routes>
        <Route path='/' exact Component={Inicio}></Route>
        <Route path='/Lapaz' exact Component={Lapaz}></Route>
        <Route path='/Oruro' exact Component={Oruro}></Route>
        <Route path='/Potosi' exact Component={Potosi}></Route>
        <Route path='/Cochabamba' exact Component={Cochabamba}></Route>
        <Route path='/Sucre' exact Component={Sucre}></Route>
        <Route path='/Tarija' exact Component={Tarija}></Route>
        <Route path='/Pando' exact Component={Pando}></Route>
        <Route path='/Beni' exact Component={Beni}></Route>
        <Route path='/Santacruz' exact Component={Santacruz}></Route>
        <Route path='/Formulario' exact Component={Formulario}></Route>
        <Route path='/Creditos' exact Component={Creditos}></Route>
        <Route path='/Login' exact Component={Login}></Route>
        <Route path='/Sing' exact Component={Sing}></Route>
      </Routes>
      <Inicio/>
    </Router>
    
    </div>
  );
}

export default App;
