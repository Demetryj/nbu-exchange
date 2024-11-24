import { useState } from 'react';

import { PER_PAGE } from '../constants';

export const usePagonation = filteredRates => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRate = currentPage * PER_PAGE;
  const indexOfFirstRate = indexOfLastRate - PER_PAGE;
  const currentRates = filteredRates.slice(indexOfFirstRate, indexOfLastRate);
  const totalPages = Math.ceil(filteredRates.length / PER_PAGE);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return { currentRates, totalPages, handlePageChange, currentPage, setCurrentPage };
};
