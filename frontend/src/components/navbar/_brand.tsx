import { Center, Group, Image, Stack, Text, Title, UnstyledButton } from '@mantine/core';

import PreloadLink from '@components/utils/link';

export function Brand() {
  return (
    <Center mr="1rem" miw="12rem">
      <UnstyledButton component={PreloadLink} href="/">
        <Group>
          <Image
            style={{ width: '38px', marginRight: '0px' }}
            src="/logo.png"
            alt="Casa Familia"
          />
          <Title style={{ height: '38px', marginBottom: '0.4rem' }}>Casa Familia Scoring System</Title>
        </Group>
      </UnstyledButton>
    </Center>
  );
}

export function BrandFooter() {
  return (
    <Center w="100%">
      <Stack align="center" gap="xs">
        <Image
          style={{ width: '80px', marginRight: '0px' }}
          src="/logo.png"
          alt="Casa Familia"
        />
        <Text size="xl" ta="center">
          Casa Familia Padel Scoring System
        </Text>
      </Stack>
    </Center>
  );
}
