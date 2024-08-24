import React from 'react';
import styles from './SearchComponent.module.css';

interface SearchComponentProps {}

const SearchComponent: React.FC<SearchComponentProps> = () => {
  return (
    <form className={styles.searchbar}>
      <div className={styles.searchContent}>
        <label htmlFor="wellNameInput" className={styles['visually-hidden']}>Well name</label>
        <input
          id="wellNameInput"
          className={styles.wellNameInput}
          type="text"
          placeholder="Well name"
          aria-label="Well name"
        />
        <div className={styles.arrowContainer}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ffae1bfb15776460416c3383ac0ee6f59f4dae52109b6fb06e7bc8e48ef7259?placeholderIfAbsent=true&apiKey=bd7bf5db5dfb4e2e8a47f4d207cc39d6" 
            className={styles.arrowIcon} 
            alt=""
          />
        </div>
        <label htmlFor="searchInput" className={styles['visually-hidden']}>Search</label>
        <input
          id="searchInput"
          className={styles.searchLabel}
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className={styles.searchIconContainer}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed82980ba3df2f7e65e492f8753337a2a68ee7c3d34e6c8bb04cba4fecdd34f?placeholderIfAbsent=true&apiKey=bd7bf5db5dfb4e2e8a47f4d207cc39d6" 
            className={styles.searchIcon} 
            alt=""
          />
        </div>
      </div>
    </form>
  );
};

export default SearchComponent;