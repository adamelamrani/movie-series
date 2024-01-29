import Logo from '../../assets/M.png';
import styles from './styles.module.css';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} width={100} alt="Movie Series Logo" />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
