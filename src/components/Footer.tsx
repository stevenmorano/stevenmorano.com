import styles from "./Portfolio.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <span>Steven Morano</span>
          <span>Marketing operations · AI-assisted systems · Useful software</span>
        </div>
        <div>
          <span>Rye Brook, New York</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
