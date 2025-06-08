import Card from '@components/card';
import Stack from '@components/stack';
import Text from '@components/text';
import LoginForm from '../components/login-form';
import RegisterForm from '../components/register-form';

export default function Login() {
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

          <LoginForm />
        </Stack>
      </Card>
    </>
  );
}
