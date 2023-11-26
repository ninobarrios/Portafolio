import './App.css';
import Inicio from './Paginas/Inicio.jsx'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Barradenavegacion from './Componentes/Barranavegacion.jsx';

function App() {
    return (
        <div>
            <BrowserRouter basename="/prueba34">
                <Barradenavegacion />
                <Routes>
                    <Route exact path="/" element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
