import './App.css'
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

     <Route path='/browse' element={<Browse/>} />
     <Route path='/error' element={<Error/>} />
     <Route path='/' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     </Routes>
     </BrowserRouter>
 
    </>
  )
}

export default App
