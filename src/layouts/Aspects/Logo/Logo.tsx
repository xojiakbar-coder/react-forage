import { NavLink } from 'react-router-dom';

// styles
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <NavLink to="/" className={styles.logo}>
      REACT FORAGE
    </NavLink>
  );
};

export default Logo;
