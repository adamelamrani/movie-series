import { useState } from 'react';
import styles from './styles.module.css';
import logo from '../../assets/M.png';

const TopNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles.topNav}>
      <div className={styles.navContainer}>
        <button className={styles.burgerMenu} onClick={handleMenuToggle}>
          ☰
        </button>
        <ul className={`${styles.navList} ${menuOpen && styles.active}`}>
          <li className={styles.logo}>
            <a href="/">
              <img src={logo} alt="Movie Series Logo" height="40px" />
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/series">Series</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
        </ul>
        <form>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default TopNavBar;
