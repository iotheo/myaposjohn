import { useState } from "react";
import "./App.css";
import LoginForm from "./containers/LoginForm";
import Dashboard from './containers/Dashboard';
import createIssue from "./actions";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import SearchBar from "./components/Searchbar";



function App() {
  const [isAuthenticated, setAuthenticated] = useState(true);
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
      <Button variant="success" className="mb-3" onClick={() => dispatch(createIssue())}>New Issue</Button>
      <SearchBar />
      <Dashboard />
    </>
  )
}

export default App;
