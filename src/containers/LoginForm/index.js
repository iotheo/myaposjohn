import { Form, Field } from "react-final-form";
import { Button } from 'react-bootstrap';
import './LoginForm.css';
import createDecorator from 'final-form-focus';

const focusOnErrors = createDecorator();

const LoginForm = ({ onLogin, hasSubmitted }) => {
  const required = value => (value ? undefined : 'This field is required')

  return <Form onSubmit={onLogin} decorators={[focusOnErrors]} >
    {({ handleSubmit }) => (
      <form className="login-form" onSubmit={handleSubmit}>
          <p>Member login</p>
          <Field
            name="username"
            component="input"
            type="text"
            validate={required}
            placeholder="Username">
              {({ input, meta, ...rest }) => {
                return(
                <div className="d-flex flex-column login-form__input">
                  <label>Username</label>
                  <input {...input} {...rest}  />
                  {meta.error && meta.touched && <span className="small text-danger login-form__input--error">{meta.error}</span>}
                </div>
              )}}
            </Field>
          <Field
            name="password"
            component="input"
            type="password"
            validate={required}
            placeholder="Password"
            className="login-form__password"
          >
            {({ input, meta, ...rest }) => (
              <div className="d-flex flex-column login-form__input">
                <label>Password</label>
                <input {...input} {...rest} />
                {meta.error && meta.touched && <span className="small text-danger login-form__input--error">{meta.error}</span>}
              </div>
            )}
          </Field>
          <Button type="submit" variant="primary">Login</Button>
         {hasSubmitted && <span className="small text-danger login-form__credentials-error">Your credentials are not valid. Please, try again.</span>}
      </form>
    )}
  </Form>;
};

export default LoginForm;
