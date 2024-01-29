import { useState } from 'react';
import styles from './styles.module.css';
import logo from '../../assets/M.png';
import { Link } from 'react-router-dom';
import { useGetAnyResultMutation } from '../../redux/api/multiApi';

const TopNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const [getAnyResult, { data, error }] = useGetAnyResultMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getAnyResult(query);
  };

  console.log(data);
  console.log(error);

  return (
    <nav className={styles.topNav}>
      <div className={styles.navContainer}>
        <button className={styles.burgerMenu} onClick={handleMenuToggle}>
          ☰
        </button>
        <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
          <li className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Movie Series Logo" width={40} height={40} />
            </Link>
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
        <form onSubmit={handleFormSubmit}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
      </div>
    </nav>
  );
};

export default TopNavBar;
