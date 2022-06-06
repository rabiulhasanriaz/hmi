import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Demographics from './components/Demographics';
import Home from './components/Home';
import Instructions from './components/Instructions';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='/demographics' element={<Demographics/>}></Route>
            <Route path='/instructions' element={<Instructions/>}></Route>
          </Routes>
          </BrowserRouter>
          
   
  );
}

export default App;
