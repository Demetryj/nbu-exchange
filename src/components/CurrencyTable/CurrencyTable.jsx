import { RateItem } from '../RateItem/RateItem';

import styles from './CurrencyTable.module.css';

export const CurrencyTable = ({ visibleRates }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Назва валюти</th>
            <th>Курс</th>
          </tr>
        </thead>
        <tbody>
          {visibleRates.map(rate => (
            <RateItem key={rate.r030} rate={rate} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
