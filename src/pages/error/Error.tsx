import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Error = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const movies = useSelector((state: any) => state.movies);
  console.log(movies);
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <p>
        <i>The page you are looking for does not exist</i>
      </p>

      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default Error;
