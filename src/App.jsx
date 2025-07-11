import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/" replace />;
};
function App() {

  
  return (
   <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
   </Routes>
  )
}
export default App
