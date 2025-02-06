import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Browse from './components/Browse'
import Login from './components/Login'
import Signup from './components/Signup'
import Error from './components/Error'
import Body from './components/Body'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>

     <Route path='/browse' element={<Browse/>} />
     <Route path='/' element={<Body/>} />
     <Route path='/error' element={<Error/>} />
     <Route path='/signin' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     </Routes>
     <ToastContainer position="bottom-right"  />
     </BrowserRouter>
 
    </>
  )
}

export default App
