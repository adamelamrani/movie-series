import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import logo from '../../assets/M.png';
import { Link } from 'react-router-dom';
import { useGetAnyResultMutation } from '../../redux/api/multiApi';
import Suggestions from '../suggestions/Suggestions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';

const TopNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const suggestionsRef = useRef(null);

  const [getAnyResult, { data, error }] = useGetAnyResultMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getAnyResult(query);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore-next-line
    if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
      setSuggestionsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setSuggestionsOpen(true);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <nav className={styles.topNav}>
      <div className={styles.navContainer}>
        <button
          className={styles.burgerMenu}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
          <li className={styles.logo}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Movie Series Logo" width={40} height={40} />
            </Link>
          </li>
          <li>
            <Link to={'/'} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/series'} onClick={() => setMenuOpen(false)}>
              Series
            </Link>
          </li>
          <li>
            <Link to={'/movies'} onClick={() => setMenuOpen(false)}>
              Movies
            </Link>
          </li>
          <li>
            <Link to={'/favourites'} onClick={() => setMenuOpen(false)}>
              My Favourites
            </Link>
          </li>
        </ul>
        <form onSubmit={handleFormSubmit}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            icon={query ? faClose : faSearch}
            className={styles.searchIcon}
            onClick={() => {
              setSuggestionsOpen(false);
              setQuery('');
            }}
          />
        </form>
        {data && (
          <Suggestions
            setOpen={setSuggestionsOpen}
            suggestionRef={suggestionsRef}
            suggestions={data}
            isOpen={suggestionsOpen}
          />
        )}
      </div>
    </nav>
  );
};

export default TopNavBar;
