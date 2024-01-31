import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className={styles.list}>
          <li>Created by: Adam El Amrani</li>
          <li>
            <FontAwesomeIcon icon={faGithub} size="lg" color="#fff" />
            <Link to={'https://github.com/adamelamrani'} target="_blank">
              {' '}
              @adamelamrani
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedinIn} />{' '}
            <Link to={'https://linkedin.com/in/adam-elamrani'} target="_blank">
              {' '}
              @adamelamrani
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
