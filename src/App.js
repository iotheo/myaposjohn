import { useState } from "react";
import "./App.css";
import LoginForm from "./containers/LoginForm";
import Dashboard from './containers/Dashboard';
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'react-bootstrap';

import CreateIssueModal from './containers/CreateIssueModal';
import { issueCreateRequested } from './actions';



function App() {
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [hasSubmitted, setSubmitted] = useState();

  const [showModal, setShowModal] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    title: '',
    body: '',
  });


  const dispatch = useDispatch();

  function handleCloseModal (e) {
    setShowModal(false);
  }

  function onExited () {
    setModalInputs({
      title: '',
      body: '',
    })
  }

  function onInputChange (e) {
    const target = e.target;
    const name = target.name;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    setModalInputs(state => ({
      ...state,
      [name]: value,
    }))
  }

  function onSubmit (e) {
    e.preventDefault();

    handleCloseModal();
    dispatch(issueCreateRequested(modalInputs));
  }

  function handleLogin(input) {
    const { username, password } = input;

    /* Before judging, this is the most secure thing you've ever seen.
      Prove me wrong 🤣
    */
    if (username === 'john' && password === 'secret') {
      setAuthenticated(true);
    }

    setSubmitted(true);
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} hasSubmitted={hasSubmitted} />;
  }

  return (
    <>
      <div className="dashboard">
        <Button variant="success" className="mb-3 d-block" onClick={() => setShowModal(true)}>New Issue</Button>
        <Dashboard />
      </div>
      <CreateIssueModal
        onExited={onExited}
        inputs={modalInputs}
        onChange={onInputChange}
        showModal={showModal}
        onSubmit={onSubmit}
        handleCloseModal={handleCloseModal}
      />
    </>
  )
}

export default App;
