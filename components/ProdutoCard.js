import styles from '../styles/ProdutoCard.module.css';
import Link from 'next/link';

export default function ProdutoCard({ produto }) {
  return (
    <div className={styles.card}>
      <img src={produto.image} alt={produto.title} className={styles.image} />
      <div className={styles.pr}>
        <h3 className={styles.title}>{produto.title}</h3>
        <p className={styles.price}>R$ {produto.price}</p>
      </div>
      <p className={styles.category}>{produto.category}</p>
      <Link href={`/${produto.id}`} className={styles.button}>Ver mais</Link>
    </div>
  );
}
