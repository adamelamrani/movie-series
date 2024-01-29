import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Error from '../pages/error/Error';
import TopNavBar from '../components/nav/TopNavBar';
import Series from '../pages/series/Series';

const MainLayout = () => {
  return (
    <>
      <TopNavBar />
      <Routes>
        {/*Entry page*/}
        <Route path="/" Component={App} />
        <Route path="/series" Component={Series} />

        {/*Error page*/}
        <Route path="*" Component={Error} />
      </Routes>
    </>
  );
};

export default MainLayout;
