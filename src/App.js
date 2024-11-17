import './App.css';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import QuienesSomos from './pages/QuienesSomos';
import Blog from './pages/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/qui" element={<QuienesSomos />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
