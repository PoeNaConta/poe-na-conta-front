import Card from '@components/card';
import Stack from '@components/stack';
import Text from '@components/text';
import LoginForm from '../components/login-form';
import RegisterForm from '../components/register-form';
import { LoginViewProps } from '../types';

export default function Login({
  isLoadingLogin,
  userLoginBody,
  errorMessage,
  onLogin: handleLogin,
  onLoginChange: handleLoginChange,
}: LoginViewProps) {
  return (
    <>
      <Card>
        <Stack
          wrap="mobile"
          direction="row"
          justify="evenly"
          align="stretch"
          space="xxl"
        >
          <RegisterForm />

          <Stack align="center" justify="center">
            <Text secondary weight="bold">
              OU
            </Text>
          </Stack>

          <LoginForm
            isLoadingLogin={isLoadingLogin}
            userLoginBody={userLoginBody}
            errorMessage={errorMessage}
            onSubmit={handleLogin}
            onChange={handleLoginChange}
          />
        </Stack>
      </Card>
    </>
  );
}
