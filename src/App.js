import Login from './pages/login';
import Signup from './pages/signup';
import Landing from './pages/landing';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  
  var [user,setuser]=useState([{}])
  return (
    <>
      
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login user={user} setuser={setuser} />}></Route>
          <Route path='/signup' element={<Signup user={user} setuser={setuser} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
