import useLoginHandlers from '../hooks/use-login-handlers';
import useRegisterHandlers from '../hooks/use-register-handlers';
import Login from '../view/login.view';

export default function LoginController() {
  const registerFormProps = useRegisterHandlers();
  const loginFormProps = useLoginHandlers();

  return (
    <Login
      registerFormProps={registerFormProps}
      loginFormProps={loginFormProps}
    />
  );
}
