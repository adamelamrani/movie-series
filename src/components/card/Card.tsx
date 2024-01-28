interface CardProps {
  title: string;
  poster: string;
}

const Card = ({ title, poster }: CardProps) => {
  const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/';
  return (
    <li>
      {title}
      <img
        width={200}
        src={`${imageUrlPrefix}${poster}`}
        alt={`Image poster from movie ${title}`}
      />
    </li>
  );
};

export default Card;
