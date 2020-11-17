import { useState } from "react";
import "./App.css";
import LoginForm from "./containers/LoginForm";
import Dashboard from './containers/Dashboard';
import { createIssue } from "./actions";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import SearchBar from "./components/Searchbar";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(true)
  const [hasSubmitted, setSubmitted] = useState();
  const [showModal, setShowModal] = useState();

  const dispatch = useDispatch();

  function handleLogin(input) {
    const { username, password } = input;

    if (username === 'john' && password === 'secret') {
      setAuthenticated(true);
    }

    setSubmitted(true);
  }

  function handleCloseModal () {
    setShowModal(false);
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} hasSubmitted={hasSubmitted} />;
  }

  return (
    <div className="dashboard">
      <Button variant="success" className="mb-3" onClick={() => setShowModal(true)}>New Issue</Button>
      <SearchBar />
      <Dashboard />
      <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create an issue</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
              Create Issue
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default App;
