import { useState } from 'react';

import { SearchInput } from '../../components/SearchInput/SearchInput';
import { RateList } from '../../components/RateList/RateList';

import styles from './SearchRates.module.css';

export default function SearchRates() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = e => {
    setSelectedDate(e.target.value);
  };

  return (
    <section>
      <div className="container">
        <div className={styles.containerSearchRates}>
          <h1>Пошук курсу валют за датою</h1>

          <SearchInput
            type="date"
            value={selectedDate}
            handleSearch={handleDateChange}
            name="searchByDate"
          />
        </div>

        {selectedDate && <RateList date={selectedDate} />}
      </div>
    </section>
  );
}
