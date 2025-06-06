import Link from "next/link";
import styles from '../styles/section.module.css';

export default function section() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <h2>Grab Up to 50% Off On Selected Headphone</h2>
        <button className={styles.bannerButtao}>Buy Now</button>
      </div>
      <div className={styles.bannerImagem}>
        <img src="/section.png"></img>
      </div>
    </section>
  );
}
