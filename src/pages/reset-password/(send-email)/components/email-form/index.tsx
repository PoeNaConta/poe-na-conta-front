import Button from '@components/button';
import Input from '@components/input';
import { EmailFormProps } from '../../types';

export default function EmailForm({
  email,
  isLoading,
  onChange: handleChange,
}: EmailFormProps) {
  return (
    <>
      <Input
        name="email"
        type="email"
        label="Digite o seu e-mail:"
        placeholder="e-mail..."
        value={email}
        onChange={handleChange}
      />

      <Button primary type="submit" disabled={!email || isLoading}>
        {isLoading ? 'Confirmar' : 'Enviando e-mail...'}
      </Button>
    </>
  );
}
