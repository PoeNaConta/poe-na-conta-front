import useLoginHandlers from '../hooks/use-login-handlers';
import Login from '../view/login.view';

export default function LoginController() {
  const {
    isLoading: isLoagingLogin,
    userLoginBody,
    errorMessage,
    handleLogin,
    handleChange: handleLoginChange,
  } = useLoginHandlers();

  return (
    <Login
      isLoadingLogin={isLoagingLogin}
      userLoginBody={userLoginBody}
      errorMessage={errorMessage}
      onLogin={handleLogin}
      onLoginChange={handleLoginChange}
    />
  );
}
