import {
  Anchor,
  Button,
  Center,
  Container,
  Image,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { tokenPresent } from '@services/local_storage';
import { performLogin } from '@services/user';

export default function LoginPage() {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
  useEffect(() => {
    if (tokenPresent()) {
      navigate('/');
    }
  }, []);

  async function attemptLogin(email: string, password: string) {
    const success = await performLogin(email, password);
    if (success) {
      showNotification({
        color: 'green',
        title: t('login_success_title'),
        icon: <IconCheck />,
        message: '',
      });

      await navigate('/');
    }
  }

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : t('invalid_email_validation')),
      password: (value) => (value.length >= 8 ? null : t('invalid_password_validation')),
    },
  });

  return (
    <>
    <Center mt={30}>
        <Image src={colorScheme === 'dark' ? '/logo-white.png' : '/logo.png'} alt="Casa Familia Scoring System" w={{ base: 300, xs: 500 }} />
    </Center>
      <Title ta="center" size="h2" fz={{ base: 24, xs: 32 }}>
        {t('welcome_title')}{' '}Casa Familia Scoring System
      </Title>
      
      <Container size={480} my={40}>
        <Paper withBorder shadow="md" p={{ base: 20, xs: 30 }} pt={8} mt={30} radius="md">
          <form
            onSubmit={form.onSubmit(async (values) => attemptLogin(values.email, values.password))}
          >
            <TextInput
              label={t('email_input_label')}
              placeholder={t('email_input_placeholder')}
              required
              my="lg"
              type="email"
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label={t('password_input_label')}
              placeholder={t('password_input_placeholder')}
              required
              mt="md"
              {...form.getInputProps('password')}
            />
            <Button fullWidth mt="xl" type="submit">
              {t('sign_in_title')}
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}
