import Button from '@components/button';
import ButtonLayout from '@components/button-layout';
import Input from '@components/input';
import Stack from '@components/stack';
import { CustomStackAsProp } from '@components/stack/types';
import Text from '@components/text';
import { LoginFormProps } from '@pages/login/types';
import { useCallback } from 'react';

export default function LoginForm({
  isLoading,
  userLoginBody,
  errorMessage,
  handleLogin,
  handleChange,
  handleForgotPassword,
}: LoginFormProps) {
  const FormWrapper = useCallback<CustomStackAsProp>(
    ({ className, children }) => (
      <form className={className} onSubmit={handleLogin}>
        {children}
      </form>
    ),
    [handleLogin],
  );

  return (
    <Stack as={FormWrapper} align="stretch" justify="between" fullWidth>
      <Text as="h3" weight="bold" center secondary>
        Faça login
      </Text>

      <Stack
        align="stretch"
        justify="start"
        space="xl"
        paddingTop="xxl"
        paddingBottom="xl"
        fullHeight
      >
        <Input
          label="Email"
          name="email"
          type="email"
          value={userLoginBody.useremail}
          placeholder="digite seu email"
          onChange={(event) => handleChange('useremail', event.target.value)}
        />

        <Input
          label="Senha"
          name="password"
          type="password"
          value={userLoginBody.passwordhash}
          placeholder="informe sua senha"
          onChange={(event) => handleChange('passwordhash', event.target.value)}
        />

        {Boolean(errorMessage) && <Text>{errorMessage}</Text>}
      </Stack>

      <ButtonLayout
        column
        primaryButton={
          <Button primary type="submit" disabled={isLoading}>
            {isLoading ? 'Carregando...' : 'Login'}
          </Button>
        }
        secondaryButton={
          <Button link onClick={handleForgotPassword}>
            Esqueceu a senha?
          </Button>
        }
      />
    </Stack>
  );
}
