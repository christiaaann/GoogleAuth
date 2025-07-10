import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  return (
   <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Home' element={<Home/>} />
   </Routes>
  )
}
export default App
