import { Transition } from 'react-transition-group';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 1 },
  exited:  { opacity: 0 },
};

const Alert = ({ in: inProp, onClose }) => {
  const message = useSelector(state => state.alert.message);
  const variant = useSelector(state => state.alert.variant);

  const duration = inProp ? 100 : 300;

  const defaultStyle = {
    // We want a smoothier transition on fade-out
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  return (
    <Transition in={inProp} timeout={duration} >
      {state => (
        <BootstrapAlert
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          onClose={onClose}
          variant={variant}
          dismissible>
          {message}
        </BootstrapAlert>
      )}
    </Transition>
  )
};

export default Alert;