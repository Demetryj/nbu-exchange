import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

import styles from './Pagination.module.css';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClickPreBtn = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleClickNextBtn = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.paginationWrapper}>
      <button
        className={`${styles.button} ${styles.buttonPrev}`}
        onClick={handleClickPreBtn}
        disabled={currentPage === 1}
      >
        <img src={arrowLeft} alt="Arrow left" />
      </button>

      <div className={styles.pagesWrapper}>
        {pages.map(page => (
          <button
            key={page}
            className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`${styles.button} ${styles.buttonNext}`}
        onClick={handleClickNextBtn}
        disabled={currentPage === totalPages}
      >
        <img src={arrowRight} alt="Arrow right" />
      </button>
    </div>
  );
};
