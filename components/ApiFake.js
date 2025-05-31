import { useEffect, useState } from "react";
import Link from 'next/link';

export default function apifake() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProdutos(data);
      setLoading(false);
    }
    fetchItems();
  }, []);

  if (loading) return <p>carregando...</p>;

  return (
    <div style={{ padding: 20}}>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>preco: {produto.price}</p>
            <img src={produto.image} alt={produto.title} width="10%"></img>
            <p>{produto.category}</p>
            <Link href={`/${produto.id}`}>Saiba mais</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
