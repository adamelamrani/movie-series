import { ReactNode } from 'react';
import styles from './styles.module.css';

const Carousel = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.carousel}>
      <ul className={styles.carouselList}>{children}</ul>
    </div>
  );
};

export default Carousel;
