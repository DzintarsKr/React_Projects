import styles from './styles.module.css';

function footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Notes App. Все права защищены.</p>
    </footer>
  );
}

export default footer;