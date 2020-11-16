import { useState } from "react";
import "./App.css";
import LoginForm from "./containers/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setAuthenticated] = useState();
  const [hasSubmitted, setSubmitted] = useState();

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
}

export default App;
