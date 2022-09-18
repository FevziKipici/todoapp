import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = () => {
    axios("https://jsonplaceholder.typicode.com/posts").then((resp) =>
      setNotes(resp.data)
    );
  };

  const removeNote = (id) => {
    if (!id) return;

    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => {
        const arr = notes.filter((item) => item.id != id);
        setNotes(arr);
        alert("The note has been deleted successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("An error occured");
      });
  };

  const createNote = (note) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", note)
      .then((resp) => {
        setNotes([resp.data, ...notes]);
      });
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <NoteForm createNote={createNote} />
        </Col>
        <Col md={9}>
          <Notes data={notes} removeNote={removeNote} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
