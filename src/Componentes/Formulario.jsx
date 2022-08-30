import React from "react";
import Form from "react-bootstrap/Form";

const Formulario = ({ nombre, setNombre, contraseña, setContraseña }) => {
  return (
    <div className="container">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa un texto"
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa una contraseña"
          onChange={(e) => setContraseña(e.target.value)}
        />
      </Form.Group>
    </Form>
    </div>
    
  );
};

export default Formulario;
