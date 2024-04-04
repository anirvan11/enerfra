import './App.css';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Add from './Pages/Add'
import Log from './Pages/Log';
import Log1 from './Pages/Log1';
import Searchside from './Pages/Searchside';
import Searchmain from './Pages/Searchmain';
import Log2 from './Pages/Log2'
import Log3 from './Pages/Log3'
import Profile from './Pages/Profile'
import Admin from './Pages/Admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <>
    </>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/Add' element={<Add/>} />
      <Route path='/Log' element={<Log/>} />
      <Route path='/Log1' element={<Log1 />} />
      <Route path='/Log2' element={<Log2 />}></Route>
      <Route path='/Searchside' element={<Searchside/>} />
      <Route path='/Searchmain' element={<Searchmain/>} />
      <Route path='/Log3' element={<Log3/>} />
      <Route path='/Profile' element={<Profile/>} />
      <Route path='/Admin' element={<Admin/>} />
    </Routes>
    
    </BrowserRouter>
  
  
    
  );
}

export default App;
