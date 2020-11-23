import { useState } from "react";
import "./App.css";
import LoginForm from "./containers/LoginForm";
import Dashboard from './containers/Dashboard';
import { useDispatch } from 'react-redux';
import { Button, Dropdown } from 'react-bootstrap';

import CreateIssueModal from './containers/CreateIssueModal';
import { issueCreateRequested } from './actions';
import useLocalStorage from './hooks/useLocalStorage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';


function App () {
  const [isAuthenticated, setAuthenticated] = useLocalStorage('auth', false);
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
    if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
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
        <div className="dashboard__user-actions mb-3">
          <Button variant="success" onClick={() => setShowModal(true)}>New Issue</Button>
          <Dropdown className="user-dropdown">
            <Dropdown.Toggle variant="secondary" id="user">
                <FontAwesomeIcon color="#aaa" icon={faUser} />
              </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setAuthenticated(false)}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
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
