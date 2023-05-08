import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ( { children } ) => {

    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // setar usuario como logado
    useEffect(() => {
      const userInfo = localStorage.getItem('userInfo');

      if(userInfo) {
        setUserLogged(true);
      } 

      setLoading(false);

    }, [userLogged]);

    const loginUser = async (inputValues) => {
      // api
        const response = await fetch('http://localhost:3021/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValues)
      })
        const data = await response.json();
        console.log(data)
        localStorage.setItem('userInfo', JSON.stringify(data))
        navigate('/')
        setUserLogged(true);
    }

    // deslogar usuario
    const logoutUser = () => {
      setUserLogged(false);
      localStorage.clear();
      navigate('/login');
    }

    if(loading) {
      return <h1>teste</h1>
    }

  return (
    <>
        <AuthContext.Provider value={{ userLogged, loginUser, logoutUser }}>
            { children }
        </AuthContext.Provider>
    </>
  )
}

export { AuthContext, AuthProvider};