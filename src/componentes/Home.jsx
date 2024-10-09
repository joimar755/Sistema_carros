import React, { useEffect } from "react";
import TextLinkExample from "./TextLinkExample";
import useAuth from "./hooks/useAuth";
//import { useNavigate } from 'react-router-dom';

const Home = () => {
  const {auth} = useAuth();
  //const navigate = useNavigate();

  //console.log(auth);
  /* useEffect(() => {
    const verifyToken = () => {
      const token = localStorage.getItem('token');
      console.log(token); // Puedes usar esto para verificar si se está obteniendo el token correctamente

      if (!token) {
        // Si no existe el token, redirigir a la página de login
        navigate('/login');
      }
    };

    verifyToken(); // Verificamos el token cuando se monta el componente
  }, [navigate]); */
  
  return (
    <div>
      <TextLinkExample />
      <h1 className="text-3xl font-bold ">hola {auth.username}</h1>
    </div>

  );
};
export default Home;
