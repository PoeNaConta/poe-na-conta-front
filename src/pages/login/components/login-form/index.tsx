import Button from '@components/button';
import ButtonLayout from '@components/button-layout';
import Input from '@components/input';
import Stack from '@components/stack';
import { CustomStackAsProp } from '@components/stack/types';
import Text from '@components/text';
import { LoginFormProps } from '@pages/login/types';
import { useCallback } from 'react';

export default function LoginForm({
  isLoadingLogin,
  userLoginBody,
  errorMessage,
  onSubmit: handleSubmit,
  onChange: handleChange,
}: LoginFormProps) {
  const FormWrapper = useCallback<CustomStackAsProp>(
    ({ className, children }) => (
      <form className={className} onSubmit={handleSubmit}>
        {children}
      </form>
    ),
    [handleSubmit],
  );

  return (
    <Stack as={FormWrapper} align="stretch" fullWidth>
      <Text as="h3" weight="bold" center secondary>
        Faça login
      </Text>

      <Input
        label="Email"
        name="email"
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

      <ButtonLayout
        column
        primaryButton={
          <Button primary type="submit" disabled={isLoadingLogin}>
            {isLoadingLogin ? 'Carregando...' : 'Login'}
          </Button>
        }
        secondaryButton={
          <Button link fake>
            Esqueceu a senha?
          </Button>
        }
      />
    </Stack>
  );
}
