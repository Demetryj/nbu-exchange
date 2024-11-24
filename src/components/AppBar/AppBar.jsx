import { Link } from 'react-router-dom';

import { Navigation } from '../Navigation/Navigation';

import styles from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.hederContainer}`}>
        <Link to="/" className={styles.logo}>
          Курси Валют НБУ
        </Link>
        <Navigation />
      </div>
    </header>
  );
};
