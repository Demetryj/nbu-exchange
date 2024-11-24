import styles from './SearchInput.module.css';

export const SearchInput = ({ type, value, handleSearch, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder="Пошук валюти..."
      value={value}
      onChange={handleSearch}
      className={styles.searchInput}
    />
  );
};
