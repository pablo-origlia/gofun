import React, { Fragment } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';

const Banda = ({ banda, borrarBanda }) => {
  return (
    <Fragment>
      <Badge bg='secondary'>
        <p>Nombre: {banda.nombre}</p>
        <p>Hora: {banda.hora}</p>
        <p>Id: {banda.id}</p>
        <Button
          variant='light'
          onClick={() => borrarBanda(banda.id)}
        >
          Borrar
        </Button>
      </Badge>
    </Fragment>
  );
};

export default Banda;
