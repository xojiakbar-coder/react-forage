import * as Icons from '@tabler/icons-react';

// styles
import cx from 'clsx';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>React Forage</h1>

      <div className={styles.logo_section}>
        <a href="https://vite.dev" target="_blank">
          <Icons.IconBrandVite className={cx(styles.logo, styles.vite)} />
        </a>
        <a href="https://react.dev" target="_blank">
          <Icons.IconBrandReact className={cx(styles.logo, styles.react)} />
        </a>
        <a href="https://mantine.dev" target="_blank">
          <Icons.IconBrandMantine className={cx(styles.logo, styles.mantine)} />
        </a>
      </div>
    </div>
  );
};

export default Home;
