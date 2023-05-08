import React, { useContext } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { TbPlaneTilt } from 'react-icons/tb';

const Header = ( ) => {

  const navigate = useNavigate();
  const { userLogged, logoutUser } = useContext(AuthContext);

  return (
    <>
    <header className='absolute header'>
        <nav className='container'>
          <div className="w-full mx-auto flex items-center justify-between p-4 bg-white bg-opacity-0">
            <div className="flex items-center space-x-2">
                <Link to='/' className='text-white logo'>Lombok</Link>
            </div>
            <div className='menu text-white uppercase flex gap-10 border px-5 py-3 rounded-full'>
              <a href='#sobre'>Sobre</a>
              <Link to='/destinos'>Destinos</Link>
              <a href='#contato'>Contato</a>
            </div>
            {
            userLogged ? (
                  <div className='flex gap-1 items-center space-x-1 text-sm font-medium text-gray-800'>
                    <button className="rounded-full bg-white px-3 py-3 text-blue-950 transition hover:bg-white" ><TbPlaneTilt/></button>
                    <button className="rounded-full bg-white px-3 py-3 text-blue-950 transition hover:bg-white" onClick={logoutUser}><AiOutlineLogout/></button>
                  </div>
                ) : (
                  <div>
                  <button className="rounded-full bg-white px-4 py-3 text-blue-950 transition hover:bg-white" onClick={() => navigate('/login')}>Entrar</button>
                  </div>
                )}
          </div>
        </nav>
    </header>
    </>
  )
}

export default Header;