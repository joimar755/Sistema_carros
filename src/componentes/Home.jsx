import React, { useEffect } from "react";
import TextLinkExample from "./TextLinkExample";
import useAuth from "./hooks/useAuth";
import Lista from "./List/Lista";
import { CardOne } from "./CardOne";
//import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { auth } = useAuth();

  return (
    <div>
      <TextLinkExample />
      <h1 className="text-3xl font-bold ">hola {auth.username}</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:gri-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-4 content-around ">
          <Lista />
        </div>
      </div>
    </div>
  );
};
export default Home;
