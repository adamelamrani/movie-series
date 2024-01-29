import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  title: string;
  poster: string;
  vote_average: number;
  vote_count: number;
}

const Card = ({ title, poster, vote_average }: CardProps) => {
  const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/';
  return (
    <li className={styles.cardContainer}>
      <img
        className={styles.movieImage}
        src={`${imageUrlPrefix}${poster}`}
        alt={`Image poster from movie ${title}`}
      />
      <div className={styles.titleBox}>
        <div className={styles.titleHeader}>
          <h3 className={styles.movieTitle}>{title}</h3>
          <p className={styles.movieParagraph}>
            <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
            {vote_average.toFixed(2)}
          </p>
        </div>
      </div>
      <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} />
    </li>
  );
};

export default Card;
