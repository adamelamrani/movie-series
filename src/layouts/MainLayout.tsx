import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Error from '../pages/error/Error';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" Component={App} />
      <Route path="*" Component={Error} />
    </Routes>
  );
};

export default Layout;
