import React from 'react'
import { Button,Col,Row,Container } from 'react-bootstrap';

function Myreactbootstrap() {
  return (
    <div>
         <Button variant="primary">Primary</Button>
         <Container>
      <Row>
        <Col md={4}>1 of 3</Col>
        <Col md={6}>2 of 3 (wider)</Col>
        <Col md={2}>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    </div>
  )
}

export default Myreactbootstrap