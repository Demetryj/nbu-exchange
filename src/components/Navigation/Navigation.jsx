import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const navlist = [
  { name: 'Головна', linkTo: '/' },
  { name: 'Змінені курси', linkTo: '/modified' },
  { name: 'Пошук курсу', linkTo: '/search' },
];

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {navlist.map(({ name, linkTo }, index) => {
          return (
            <li key={name + index}>
              <NavLink
                to={linkTo}
                className={({ isActive }) =>
                  isActive ? `${styles.navigationLink} ${styles.active}` : styles.navigationLink
                }
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
