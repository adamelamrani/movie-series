import Logo from '../../assets/M.png';

const Header = () => {
  return (
    <header>
      <img src={Logo} width={80} alt="Movie Series Logo" />
      <h1>Movie - Series</h1>
    </header>
  );
};

export default Header;
