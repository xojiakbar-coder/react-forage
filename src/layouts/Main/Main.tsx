import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

// styles
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.page_wrapper}>
        <div className={styles.page}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
