import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.errorComponent}>
      <h1>404</h1>
      <p>
        <i>The page you are looking for does not exist</i>
      </p>

      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default Error;
