import React from 'react'; 
import './index.css';
import Home from './routes/Home';
import Academics from './routes/Academics';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Academics' exact element={<Academics/>} />
        <Route path='/Skills' exact element={<Skills/>} />
        <Route path='/Projects' exact element={<Projects/>} />
       </Routes>
    </div>
  );
}

export default App;
