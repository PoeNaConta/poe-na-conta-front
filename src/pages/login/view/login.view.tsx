import Card from '@components/card';
import Stack from '@components/stack';
import Text from '@components/text';
import LoginForm from '../components/login-form';
import RegisterForm from '../components/register-form';
import { LoginViewProps } from '../types';
import CenterLayout from '@components/center-layout';

export default function Login({
  registerFormProps,
  loginFormProps,
}: LoginViewProps) {
  return (
    <CenterLayout
      title="Põe na Conta"
      subtitle="Auxiliando o seu controle financeiro"
      width={80}
      height={55}
    >
      <Card>
        <Stack
          wrap="mobile"
          direction="row"
          justify="evenly"
          align="stretch"
          space="xxl"
          fullHeight
        >
          <RegisterForm {...registerFormProps} />

          <Stack align="center" justify="center">
            <Text secondary weight="bold">
              OU
            </Text>
          </Stack>

          <LoginForm {...loginFormProps} />
        </Stack>
      </Card>
    </CenterLayout>
  );
}
