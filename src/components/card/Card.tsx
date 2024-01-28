import styles from './styles.module.css';

interface CardProps {
  title: string;
  poster: string;
}

const Card = ({ title, poster }: CardProps) => {
  const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/';
  return (
    <li className={styles.cardContainer}>
      <img
        width={250}
        src={`${imageUrlPrefix}${poster}`}
        alt={`Image poster from movie ${title}`}
      />
      <div>
        <h3>{title}</h3>
      </div>
    </li>
  );
};

export default Card;
