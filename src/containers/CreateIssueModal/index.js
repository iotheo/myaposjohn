import React from 'react';

import { Button, Modal, Form } from "react-bootstrap";

const CreateIssueModal = ({ showModal, onSubmit, handleCloseModal, onChange, inputs, onExited }) => {
  return (
    <Modal
      onExited={onExited}
      size="lg"
      show={showModal}
      onHide={handleCloseModal}
    >
      <Modal.Header closeButton closeLabel="Close">
        <Modal.Title>Create an issue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={onChange}
              required
              type="text"
              placeholder="Title"
              name="title"
              value={inputs.title}
            />
          </Form.Group>
          <Form.Group controlId="formBody">
            <Form.Label>Description <em className="text-muted small">Optional</em></Form.Label>
            <Form.Control
              onChange={onChange}
              type="text"
              placeholder="Leave a comment"
              as="textarea"
              name="body"
              value={inputs.body}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Create Issue
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};


export default CreateIssueModal;

