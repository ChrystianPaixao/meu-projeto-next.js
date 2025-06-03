import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";
import { toast } from "react-toastify";

export default function apifake() {
  const [produtos, setProdutos] = useState([]);

  const toastId = "carregando...";

  useEffect(() => {
    async function fetchItems() {
      if (!toast.isActive(toastId)) {
      toast.loading("Carregando...", { toastId});
    }
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProdutos(data);

        toast.update(toastId, {
          render: "Produtos carregados!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      } catch (erro) {
        toast.update(toastId, {
          render: "Erro ao carregar!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    }
    fetchItems();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Produtos</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
