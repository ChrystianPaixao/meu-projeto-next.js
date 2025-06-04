import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/"><img src="/logo.png" className={styles.img}></img></Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Inicio</Link>
        <Link href="/produtos">Produtos</Link>
      </nav>
    </header>
  );
}
