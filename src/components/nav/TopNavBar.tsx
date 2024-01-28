import { useState } from 'react';
import styles from './styles.module.css';
import logo from '../../assets/M.png';
import { Link } from 'react-router-dom';

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
        <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
          <li className={styles.logo}>
            <a href="/">
              <img src={logo} alt="Movie Series Logo" width={40} height={40} />
            </a>
          </li>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/series'}>Series</Link>
          </li>
          <li>
            <Link to={'/movies'}>Movies</Link>
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
