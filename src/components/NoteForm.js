import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const NoteForm = ({ createNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitle} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Text</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          value={desc}
          onChange={handleDesc}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={() =>
          createNote({
            title: title,
            body: desc,
            userId: 1,
          })
        }
      >
        Add
      </Button>
    </div>
  );
};

export default NoteForm;
