import { useState } from "react";
import "./App.css";
import LoginForm from "./containers/LoginForm";
import Dashboard from './containers/Dashboard';
import createIssue from "./actions";
import { useDispatch } from "react-redux";



function App() {
  const [isAuthenticated, setAuthenticated] = useState();
  const [hasSubmitted, setSubmitted] = useState();

  const dispatch = useDispatch(createIssue);

  function handleLogin(input) {
    const { username, password } = input;

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
      <button onClick={() => dispatch(createIssue())}>Create Issue</button>
      <Dashboard />
    </>
  )
}

export default App;
