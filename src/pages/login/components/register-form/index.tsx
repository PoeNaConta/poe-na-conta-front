import Button from '@components/button';
import ButtonLayout from '@components/button-layout';
import Input from '@components/input';
import Stack from '@components/stack';
import { CustomStackAsProp } from '@components/stack/types';
import Text from '@components/text';
import { RegisterFormProps } from '@pages/login/types';
import { useCallback } from 'react';

export default function RegisterForm({
  isLoading,
  errorMessage,
  userRegisterBody,
  handleChange,
  handleRegister,
}: RegisterFormProps) {
  const FormWrapper = useCallback<CustomStackAsProp>(
    ({ className, children }) => (
      <form className={className} onSubmit={handleRegister}>
        {children}
      </form>
    ),
    [handleRegister],
  );

  return (
    <Stack as={FormWrapper} align="stretch" fullWidth>
      <Text as="h3" weight="bold" center secondary>
        Registre-se
      </Text>

      <Input
        label="Nome"
        placeholder="seu nome"
        value={userRegisterBody.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="digite seu email"
        value={userRegisterBody.useremail}
        onChange={(e) => handleChange('useremail', e.target.value)}
      />

      <Input
        label="Senha"
        name="password"
        type="password"
        placeholder="crie uma senha"
        value={userRegisterBody.passwordhash}
        onChange={(e) => handleChange('passwordhash', e.target.value)}
      />

      {Boolean(errorMessage) && <Text>{errorMessage}</Text>}

      <ButtonLayout
        column
        primaryButton={
          <Button primary type="submit" disabled={isLoading}>
            {isLoading ? 'Carregando...' : 'Submit'}
          </Button>
        }
      />
    </Stack>
  );
}
