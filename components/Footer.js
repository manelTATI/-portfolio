import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>&copy; {new Date().getFullYear()} Manel Tati</p>
      <ul className={styles.links}>
        <li>
          <a href="https://github.com/manelTATI" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:manel.tati@gmail.com">Email</a>
        </li>
      </ul>
    </footer>
  );
}
