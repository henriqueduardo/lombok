import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import { AuthProvider } from './Context/AuthContext';
import Destinos from './Pages/Destinos';
import NotFound from './Pages/NotFound';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    <>
    <AuthProvider>      
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/destinos' element={
              <PrivateRoute>
                <Destinos/>
              </PrivateRoute>
            }/>
            <Route path='/*' element={<NotFound/>}/>  
          </Routes>
        <Footer/>
    </AuthProvider>
    </>
  );
}

export default App;
