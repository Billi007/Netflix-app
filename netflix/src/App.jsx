import './App.css'
import Body from './components/Body'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Browse from './components/Browse'
import Login from './components/Login'
import Signup from './components/Signup'
import Error from './components/Error'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>

     <Route path='/' element={<Body/>} />
     <Route path='/browse' element={<Browse/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/error' element={<Error/>} />
     </Routes>
     </BrowserRouter>
 
    </>
  )
}

export default App
