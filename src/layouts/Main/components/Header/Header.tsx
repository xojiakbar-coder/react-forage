import { NavLink, useLocation } from 'react-router-dom';
import { useWindowScroll } from '@mantine/hooks';

// styles
import cx from 'clsx';
import styles from './Header.module.scss';

const Header = () => {
  const [scroll] = useWindowScroll();

  return (
    <header className={cx(styles.header, scroll.y > 0 ? styles.header_darker : null)}>
      <NavLink to="/home" className={styles.logo}>
        REACT FORAGE
      </NavLink>

      <nav className={styles.nav}>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link)}
        >
          Dashboard
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
