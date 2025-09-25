import { useDisclosure } from '@mantine/hooks';

import { Logo } from '@/layouts/Aspects/Logo';
import { Navigation } from '@/layouts/Aspects/Navigation';
import { AppShell, Burger, Group, UnstyledButton } from '@mantine/core';

// styles
import styles from './Home.module.scss';

const Home = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
    >
      <AppShell.Header bg={'dark'}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Logo />
        <Group>
          <Navigation />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={styles.control}>Home</UnstyledButton>
        <UnstyledButton className={styles.control}>Blog</UnstyledButton>
        <UnstyledButton className={styles.control}>Contacts</UnstyledButton>
        <UnstyledButton className={styles.control}>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>
        Navbar is only visible on mobile, links that are rendered in the header on desktop are hidden on mobile in
        header and rendered in navbar instead.
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
