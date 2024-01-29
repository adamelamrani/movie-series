import styles from './styles.module.css';

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className={styles.listStyle}>{children}</ul>;
};

export default List;
