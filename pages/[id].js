import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const [produto, setProdutos] = useState(null);

  useEffect(() => {
    async function fetchProduto() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProdutos(data);
    }
    fetchProduto();
  }, [id]);

  if (!produto) return <p>Carregando produto...</p>;

   return (
    <div style={{ padding: 20 }}>
      <Link href="/">← Voltar</Link>
      <h1>{produto.title}</h1>
      <img src={produto.image} alt={produto.title} style={{ maxWidth: 200 }} />
      <p>Preço: {produto.price}</p>
      <p>Descrição:{produto.description}</p>
      <p>Categoria:{produto.category}</p>
    </div>
  );
}
