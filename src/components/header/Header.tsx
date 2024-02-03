import Logo from '../../assets/M.png';
import styles from './styles.module.css';

interface HeaderProps {
  title?: string;
  logo?: boolean;
}

const Header = ({ title, logo }: HeaderProps) => {
  return (
    <header className={styles.headerContainer}>
      {logo && (
        <img
          className={styles.logo}
          src={Logo}
          width={100}
          alt="Movie Series Logo"
        />
      )}
      {title && <h1 className={styles.heading}>{title}</h1>}
    </header>
  );
};

export default Header;
