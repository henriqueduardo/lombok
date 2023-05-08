import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {

    const [inputValues, setInputValues] = useState({
        email: "",
        senha: ""
    });

    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleChangeValues = (evento) => {
      setInputValues({
        ...inputValues,
        [evento.target.name]: evento.target.value
      })
      console.log(inputValues);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      loginUser(inputValues);
    }

  return (
    <>
<section className="main-background">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto pt-36">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Iniciar sessão
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mail@gmail.com" required="" onChange={handleChangeValues}/>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                      <input type="password" name="senha" id="senha" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChangeValues}/>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Entrar</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Não tem uma conta? <a className="font-medium color-primary hover:underline">Criar conta</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Login;