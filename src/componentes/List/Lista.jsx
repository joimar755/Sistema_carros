import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";
import  CardOne  from "../CardOne";

export const Lista = () => {
  const [Car, setCar] = useState([]);

  const car = async () => {
    try {
      const url = await axios.get("http://127.0.0.1:8000/relacion");
      const resultado = url;
      setCar(resultado.data);
    } catch (error) {}
  };

  useEffect(() => {
    car();
  }, []);
  console.log(Car);


  return (
    <>
      {Car.map((carItem) => ( 
          <CardOne key={carItem.id} car={carItem} /> 
        ))}
    </>
  )

};




export default Lista;
