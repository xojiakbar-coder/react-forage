import { Outlet } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

import { Logo } from '@/layouts/Aspects/Logo';
import { Navigation } from '@/layouts/Aspects/Navigation';
import { AppShell, Burger, Group, Text } from '@mantine/core';

// styles
import styles from './Main.module.scss';

const Main = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Logo />
          <Group>
            <Navigation />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>
        <Text>This is the main section, your app content here.</Text>
        <Text>AppShell example with all elements: Navbar, Header, Aside, Footer.</Text>
        <Text>All elements except AppShell.Main have fixed position.</Text>
        <Text>Aside is hidden on on md breakpoint and cannot be opened when it is collapsed</Text>
        <Outlet />
      </AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
};

export default Main;
