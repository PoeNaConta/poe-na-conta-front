import Text from '@components/text';
import CenterLayout from '@components/center-layout';
import Card from '@components/card';
import Stack from '@components/stack';
import Button from '@components/button';
import { VerifyEmailProps } from '../types';

export default function VerifyEmail({ handleGoToHome }: VerifyEmailProps) {
  return (
    <CenterLayout width={50} height={50}>
      <Card>
        <Stack align="stretch" space="xxl">
          <Text as="h3" primary weight="bold" size="lg" center>
            Verifique seu e-mail!
          </Text>

          <Text secondary weight="semibold" justify>
            Acesse o link de verificação enviado para o e-mail informado. Em
            seguida, retorne à tela de login para entrar em sua nova conta!
          </Text>

          <Button primary onClick={handleGoToHome}>
            Ir para o login
          </Button>
        </Stack>
      </Card>
    </CenterLayout>
  );
}
