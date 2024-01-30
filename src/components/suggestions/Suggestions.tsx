import { Link } from 'react-router-dom';
import MultiInterface from '../../types/Multi';
import styles from './styles.module.css';

interface SuggestionsProps {
  suggestions: MultiInterface;
  isOpen: boolean;
  suggestionRef: React.RefObject<HTMLDivElement>;
}

const Suggestions = ({
  suggestions,
  isOpen,
  suggestionRef,
}: SuggestionsProps) => {
  const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/';
  const filteredResults = suggestions.results.filter(
    (result) => result.media_type !== 'person',
  );

  return (
    <div
      ref={suggestionRef}
      className={isOpen ? styles.suggestionsBox : styles.closedBox}
    >
      {filteredResults.map((suggestion) => (
        <Link
          to={
            suggestion.media_type === 'movie'
              ? `/movie/${suggestion.id}`
              : `/serie/${suggestion.id}`
          }
          className={styles.suggestionCard}
          key={suggestion.id}
        >
          {suggestion.poster_path ? (
            <img
              className={styles.suggestionImage}
              src={imageUrlPrefix + suggestion.poster_path}
              alt={suggestion.title ? suggestion.title : suggestion.name}
            />
          ) : (
            <div className={styles.noSuggestionImage}>
              <p>No image</p>
            </div>
          )}
          <div className={styles.suggestionInfo}>
            <h3 className={styles.suggestionTitle}>
              {suggestion.title ? suggestion.title : suggestion.name}
            </h3>
            <p>
              {suggestion.first_air_date
                ? suggestion.first_air_date
                : suggestion.release_date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Suggestions;
