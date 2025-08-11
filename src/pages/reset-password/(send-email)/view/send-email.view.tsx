import Button from '@components/button';
import Card from '@components/card';
import CenterLayout from '@components/center-layout';
import Stack from '@components/stack';
import Text from '@components/text';
import { SendEmailProps } from '../types';
import EmailForm from '../components/email-form';

export default function SendEmail({
  email,
  isLoading,
  requestStatus = 'pending',
  onChange: handleChange,
  onSubmit: handleSubmit,
}: SendEmailProps) {
  return (
    <CenterLayout height={30}>
      <Card form onSubmit={handleSubmit}>
        <Stack align="stretch" justify="between" space="xxl" fullHeight>
          <Text secondary as="h3" weight="bold" size="lg">
            Esqueci minha senha
          </Text>

          {requestStatus === 'pending' && (
            <EmailForm
              email={email}
              isLoading={isLoading}
              onChange={handleChange}
            />
          )}

          {requestStatus === 'sent' && (
            <Text justify>
              Um e-mail foi enviado o e-mail informado com as próximas
              instruções!
            </Text>
          )}

          {requestStatus === 'error' && (
            <>
              <Text justify>
                Algo deu errado ao solicitar a troca de senha.
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
