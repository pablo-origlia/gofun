import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Banda from './components/Banda';

function App() {
  // Iniciamos el almacenamiento en la cache del navegador.
  // local storage
  let bandasIniciales = JSON.parse(localStorage.getItem('bandas'));

  if (!bandasIniciales) {
    bandasIniciales = [];
  }

  // Creamos un hook useState vacío para la lista de lineUp
  const [lineUp, editarLineUp] = useState(bandasIniciales);

  // El hook useEffect sirve para ejecutar cosas cuando cambia el estado de un elemento
  useEffect(() => {
    if (bandasIniciales) {
      localStorage.setItem('bandas', JSON.stringify(lineUp));
    } else {
      localStorage.setItem('bandas', JSON.stringify([]));
    }
  }, [bandasIniciales, lineUp]);

  // Creamos una función que recibe el banda nuevo y lo agrega a la lista de lineUp.
  const agregarBanda = (banda) => {
    editarLineUp([...lineUp, banda]);
    console.log(lineUp);
  };

  const borrarBanda = (id) => {
    const nuevaBandas = lineUp.filter((banda) => banda.id !== id);
    editarLineUp(nuevaBandas);
  };

  // Cambiamos el titulo si no hay bandas
  let titulo = lineUp.length === 0 ? 'Aún no hay bandas' : 'Lista de bandas';

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>Go Fun!</Col>
        </Row>
        <Row>
          <Col>
            <Formulario agregarBanda={agregarBanda} />
          </Col>
          <Col>
            <h3>{titulo}</h3>
            {lineUp.map((banda) => (
              <Banda
                banda={banda}
                key={banda.id}
                borrarBanda={borrarBanda}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
