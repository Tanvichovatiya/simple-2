import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Head from './component/head'
import Shop from './component/shop'
import About from './component/about'
import Home from './component/Home'
function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>} ></Route>

    <Route path='/head' element={<Head/>} ></Route>
    <Route path='/shop' element={<Shop/>} ></Route>
    <Route path='/about' element={<About/>}></Route>

  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App