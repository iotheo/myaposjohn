import { Form, Field } from "react-final-form";
import { Button, Alert } from 'react-bootstrap';

import './LoginForm.css';

const LoginForm = ({ onLogin, hasSubmitted }) => {

  console.log(hasSubmitted)

  return <Form onSubmit={onLogin} >
    {({ handleSubmit }) => (
      <form className="login-form" onSubmit={handleSubmit}>
          <p>Member login</p>
          {hasSubmitted && <Alert variant="danger" className="login-form__wrong-credentials">
              Your credentials are not correct. Please try again.
            </Alert>}
          <Field
            name="username"
            component="input"
            type="text"
            required
            placeholder="Username"
            className="login-form__username"
          />
          <Field
            name="password"
            component="input"
            type="password"
            required
            placeholder="Password"
            className="login-form__password"
          />
          <Button type="submit" variant="primary">Login</Button>
      </form>
    )}
  </Form>;
};

export default LoginForm;
