import styles from './styles.module.css';

function main({ children }) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}

export default main;