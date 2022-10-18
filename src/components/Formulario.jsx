import { Fragment, React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

const Formulario = ({ agregarBanda }) => {
  // Creo un evento vacío y lo inicializo con un hook de state
  const [banda, editarBanda] = useState({
    nombre: '',
    hora: '',
  });

  // State para el error en el formulario
  const [error, setError] = useState(false);

  // Extraer valores
  const { nombre, hora } = banda;

  // Agarramos lo que el usuario escribe en el formulario
  const handleChange = (e) => {
    editarBanda({
      ...banda,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');

    // Validar la info del formulario
    // Manejo de errores
    if (nombre.trim() === '' || hora.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    // Generar el banda

    // Ponerle un id único al banda
    banda.id = uuid();
    agregarBanda(banda);

    // Chequear que no exista

    // Limpiar el formulario
    editarBanda({
      nombre: '',
      hora: '',
    });
  };

  return (
    <Fragment>
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nombre completo de la banda'
            name='nombre'
            onChange={handleChange}
            value={nombre}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type='text'
            placeholder='Sin puntos ni espacios'
            name='hora'
            onChange={handleChange}
            value={hora}
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
        >
          Ingresar presentación
        </Button>
      </Form>
      {error ? <h4>Completá todos los campos</h4> : null}
    </Fragment>
  );
};

export default Formulario;
