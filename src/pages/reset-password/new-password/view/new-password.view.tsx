import Card from '@components/card';
import CenterLayout from '@components/center-layout';
import Input from '@components/input';
import Text from '@components/text';
import { NewPasswordProps } from '../types';
import Button from '@components/button';
import Stack from '@components/stack';

export default function NewPasswordView({
  password,
  isLoading,
  requestStatus,
  onChange: handleChange,
  onSubmit: handleSubmit,
}: NewPasswordProps) {
  return (
    <CenterLayout height={30}>
      <Card form onSubmit={handleSubmit}>
        <Stack align="stretch" justify="between" space="xl" fullHeight>
          <Text secondary as="h3" size="lg" weight="bold">
            Esqueci minha senha
          </Text>

          {requestStatus === 'pending' && (
            <>
              <Input
                name="password"
                type="password"
                label="Digite sua nova senha:"
                placeholder="Nova senha..."
                value={password}
                onChange={handleChange}
              />

              <Button primary type="submit" disabled={!password || isLoading}>
                {isLoading ? 'Alterando senha...' : 'Alterar senha'}
              </Button>
            </>
          )}

          {requestStatus === 'sent' && (
            <>
              <Text justify>
                Senha alterada com sucesso! Volte a tela de login e entre com
                sua nova senha.
              </Text>

              <Button primary type="submit">
                Voltar ao Login
              </Button>
            </>
          )}

          {requestStatus === 'error' && (
            <>
              <Text justify>
                Algo de errado ocorreu ao alterar sua senha. Você pode tentar
                novamente.
              </Text>

              <Button primary type="submit">
                Tentar novamente
              </Button>
            </>
          )}
        </Stack>
      </Card>
    </CenterLayout>
  );
}
