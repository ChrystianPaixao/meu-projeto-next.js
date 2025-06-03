import styles from "../styles/Header.module.css";

export default function header() {

  return (
    <header className={styles.Infor}>
      <div>81 977652635</div>
      <div>Grab Up to 50% Off || Selected Headphone</div>
      <nav>
        <select>
          <option value="Português">Pt-br </option>
          <option value="Inglês">En</option>
          <option value="Nordestino">Nordestino</option>
        </select>
        <select>
          <option value="Português">PE</option>
          <option value="Inglês">SP</option>
          <option value="Nordestino">RJ</option>
        </select>
      </nav>
    </header>
  );
}
