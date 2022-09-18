import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Note from "./Note";

const Notes = ({ data,removeNote }) => {
  return (
    <Container>
      <Row className="g-5">
        {data.map((item) => (
          <Col md={4} key={item.id}>
            <Note note={item} removeNote={removeNote}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Notes;
