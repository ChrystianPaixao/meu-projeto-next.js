import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/"><img src="/logo.png" className={styles.img}></img></Link>
        <nav className={styles.nav}>
          <Link className={styles.link} href="/">Inicio</Link>
          <Link href="/produtos">Produtos</Link>
        </nav>
      </div>
      <nav className={styles.nav}>
        <Link href={"/"}><FaShoppingCart size={20} /></Link>
        <Link href={"/"}><FaUser size={20} /></Link>
      </nav>
    </header>
  );
}
