import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/Formulario';

function App() {
  // Creamos un state vacío para la lista de lineUp
  const [lineUp, editarLineUp] = useState([]);

  // Creamos una función que recibe el banda nuevo y lo agrega a la lista de lineUp.
  const agregarBanda = (banda) => {
    editarLineUp([...lineUp, banda]);
    console.log(lineUp);
  };

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
          <Col>Lista de Bandas </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
