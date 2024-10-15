import React, { useEffect, useState } from "react";
import TextLinkExample from "./TextLinkExample";
import useAuth from "./hooks/useAuth";
import Lista from "./List/Lista";
import { CardOne } from "./CardOne";
//import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { auth } = useAuth();
  const [CarCount, setCarCount] = useState(0); 
  const [CarAdd, setCarAdd] = useState([]); 

  const handleCarCount = (count) => {
    setCarCount(count); // Actualiza el estado de CarCount
  };


  const handleAddClick = (newCarItem) => {
  
    const nuevoCarrito = [...CarAdd, newCarItem]; // Agrega el nuevo ítem al carrito
    setCarAdd(nuevoCarrito); // Actualiza el estado del carrito
    setCarCount(nuevoCarrito.length); 
    console.log(nuevoCarrito);
  }


  return (
    <div>
      <TextLinkExample CarCount={CarCount} CarAdd={CarAdd} />
      <h1 className="text-3xl font-bold ">hola {auth.username}</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:gri-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-4 content-around ">
          <Lista  onCarCountUpdate={handleCarCount} onCarAdd={handleAddClick} />
        </div>
      </div>
    </div>
  );
};
export default Home;
