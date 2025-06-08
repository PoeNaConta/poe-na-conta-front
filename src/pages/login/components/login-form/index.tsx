import Button from '@components/button';
import ButtonLayout from '@components/button-layout';
import Input from '@components/input';
import Stack from '@components/stack';
import Text from '@components/text';

export default function LoginForm() {
  return (
    <Stack
      as={({ className, children }) => (
        <form className={className}>{children}</form>
      )}
      align="stretch"
      fullWidth
    >
      <Text as="h3" weight="bold" center secondary>
        Faça login
      </Text>

      <Input label="Email" placeholder="digite seu email" />

      <Input label="Senha" placeholder="informe sua senha" />

      <ButtonLayout
        column
        primaryButton={
          <Button primary type="submit">
            Login
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
