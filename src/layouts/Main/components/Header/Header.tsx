import { NavLink } from 'react-router-dom';

// styles
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.header_wrapper}>
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
      </div>
    </header>
  );
};

export default Header;
