import Button from '@components/button';
import ButtonLayout from '@components/button-layout';
import Input from '@components/input';
import Stack from '@components/stack';
import Text from '@components/text';

export default function RegisterForm() {
  return (
    <Stack
      as={({ className, children }) => (
        <form className={className}>{children}</form>
      )}
      align="stretch"
      fullWidth
    >
      <Text as="h3" weight="bold" center secondary>
        Registre-se
      </Text>

      <Input label="Nome" placeholder="seu nome" />

      <Input label="Email" placeholder="digite seu email" />

      <Input label="Senha" placeholder="crie uma senha" />

      <ButtonLayout
        column
        primaryButton={
          <Button primary type="submit">
            Submit
          </Button>
        }
      />
    </Stack>
  );
}
