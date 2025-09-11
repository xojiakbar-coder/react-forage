import * as Icons from '@tabler/icons-react';
import cx from 'clsx';

// styles
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.container}>
      <header className={styles.title_section}>
        <h1 className={styles.title}>React Forage</h1>
        <p className={styles.subtitle}>
          Best code resources for React.js projects, real-world examples, Mantine UI implementations, and custom-built
          components
        </p>
      </header>

      <nav className={styles.logo_section} aria-label="Frameworks and UI libraries">
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React official website"
          title="React official website"
        >
          <Icons.IconBrandReact
            role="img"
            aria-hidden="false"
            aria-label="React logo"
            className={cx(styles.logo, styles.react)}
          />
        </a>
        <a
          href="https://mantine.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mantine official website"
          title="Mantine official website"
        >
          <Icons.IconBrandMantine
            role="img"
            aria-hidden="false"
            aria-label="Mantine logo"
            className={cx(styles.logo, styles.mantine)}
          />
        </a>
      </nav>
    </main>
  );
};

export default Home;
