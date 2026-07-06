import styles from "./styles.module.css";
import meckLogo from "../../icons/meck.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={meckLogo} alt="MECK" />
      </div>

      <nav className={styles.nav}>
        <a href="#">Главная</a>
        <a href="#">Музыка</a>
        <a href="#">Сообщества</a>
        <a href="#">Друзья</a>
      </nav>
    </header>
  );
}

export default Header;