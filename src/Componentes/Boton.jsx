import React from "react";
import Button from 'react-bootstrap/Button';

const Boton = ({ contraseña }) => {
  if(contraseña === "252525"){
    return <Button variant="primary">Hola soy un Boton!</Button>
  }else{
    return null
  }
};

export default Boton;
