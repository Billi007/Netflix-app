import './App.css'
import Body from './components/Body'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Browse from './components/Browse'
import Login from './components/Login'
import Signup from './components/Signup'
import Header from './components/Header'

function App() {

  return (
    <>
       <div className="absolute">
         <Header/>
      <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_small.jpg" 
      alt="img" />
      </div>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Body/>} />
     <Route path='/browse' element={<Browse/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
