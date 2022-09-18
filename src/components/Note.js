import React from "react";
import { Button, Card } from "react-bootstrap";

const Note = ({ note,removeNote }) => {
  const { id,title, body } = note;
  console.log(note);

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button onClick={()=>removeNote(id)} variant="danger">Delete</Button>
      </Card.Footer>
    </Card>
  );
};

export default Note;
