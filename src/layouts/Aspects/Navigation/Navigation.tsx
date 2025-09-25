import { NavLink } from 'react-router-dom';

// styles
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link)}
      >
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navigation;
