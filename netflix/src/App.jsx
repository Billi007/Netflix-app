import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Loading from './components/Loading'
import {lazy, Suspense} from 'react'

function App() {
  const Browse = lazy(() => import('./components/Browse'));
  const Body = lazy(() => import('./components/Body'));
  const Error = lazy(() => import('./components/Error'));
  const Signup = lazy(() => import('./components/Signup'));

  return (
    <>
     <BrowserRouter>
      <Suspense fallback={<Loading/>}>
      <Routes>
     <Route path='/browse' element={<Browse/>} />
     <Route path='/' element={<Body/>} />
     <Route path='/error' element={<Error/>} />
     {/* <Route path='/signin' element={<Login/>} /> */}
     <Route path='/signup' element={<Signup/>} />
     </Routes>
     <ToastContainer position="bottom-right"  />
      </Suspense>
     </BrowserRouter>
 
    </>
  )
}

export default App
