
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import SobreNosotros from './components/SobreNosotros';
import Tareas from './components/Tareas';
import './App.css'



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/tareas" element={<Tareas />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

