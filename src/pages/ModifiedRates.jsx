import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Pagination } from '../components/Pagination/Pagination';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { CurrencyTable } from '../components/CurrencyTable/CurrencyTable';

import { getModifiedRates } from '../redux/ratesSlice';
import { useRates } from '../hooks/useRates';
import { usePagonation } from '../hooks';

export default function ModifiedRates() {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const { modifiedRates } = useRates();

  useEffect(() => {
    const storedModifiedRates = JSON.parse(localStorage.getItem('modifiedRates')) || [];

    dispatch(getModifiedRates(storedModifiedRates));
  }, [dispatch]);

  const filteredRates = modifiedRates.filter(rate =>
    rate.txt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { totalPages, handlePageChange, currentPage, setCurrentPage } =
    usePagonation(filteredRates);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (modifiedRates.length === 0) {
    return <p>Немає змінених курсів валют.</p>;
  }

  return (
    <section>
      <div className="container">
        <h1>Змінені курси валют</h1>

        {filteredRates.length !== 0 ? (
          <>
            <SearchInput
              type="text"
              value={searchTerm}
              handleSearch={handleSearch}
              name="searchByName"
            />
            <CurrencyTable visibleRates={modifiedRates} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <p className="error">Дані за такими критеріями відсутні</p>
        )}
      </div>
    </section>
  );
}
