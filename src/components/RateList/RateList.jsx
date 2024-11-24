import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchInput } from '../SearchInput/SearchInput';
import { CurrencyTable } from '../CurrencyTable/CurrencyTable';
import { Pagination } from '../Pagination/Pagination';

import { fetchRates } from '../../redux/operations';
import { useRates, usePagonation } from '../../hooks';

import styles from './RateList.module.css';

export const RateList = ({ date }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const { rates, modifiedRates, status, error } = useRates();

  useEffect(() => {
    const formattedDate = date ? date.replace(/-/g, '') : getTodayDate();

    dispatch(fetchRates(formattedDate));
  }, [dispatch, date]);

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}${mm}${dd}`;
  };

  const displayedRates = rates.map(rate => {
    const modified = modifiedRates.find(mod => mod.cc === rate.cc);
    return modified ? { ...rate, rate: modified.rate } : rate;
  });

  const filteredRates = displayedRates.filter(rate =>
    rate.txt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { currentRates, totalPages, handlePageChange, currentPage, setCurrentPage } =
    usePagonation(filteredRates);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (status === 'loading') {
    return <p className={styles.loading}>Завантаження курсів валют...</p>;
  }

  if (status === 'failed') {
    return <p className="error">Помилка: {error}</p>;
  }

  return (
    <>
      <SearchInput type="text" value={searchTerm} handleSearch={handleSearch} name="searchByName" />

      {filteredRates.length > 0 ? (
        <>
          <CurrencyTable visibleRates={currentRates} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p className="error">Дані за такими критеріями відсутні</p>
      )}
    </>
  );
};
