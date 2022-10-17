import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>Go Fun!</Col>
        </Row>
        <Row>
          <Col>Ingresos de Eventos</Col>
          <Col>Lista de Eventos </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
