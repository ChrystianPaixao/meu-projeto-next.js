import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderI from "@/components/HeaderInfo";
import Headers from "@/components/Header";
import styles from "@/styles/ProdutoDetalhes.module.css";
import Heade from "@/components/Heade";
import { toast } from "react-toastify";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const [quantidade, setQuantidade] = useState(1);
  const [produto, setProdutos] = useState(null);
  const toastId = "carregando-produto";

  const aumentar = () => setQuantidade((quant) => quant + 1);
  const diminuir = () => {
    if (quantidade > 1) setQuantidade((quant) => quant - 1);
  };

  useEffect(() => {
    if (!toast.isActive(toastId)) {
      toast.loading("Carregando...", { toastId });
    }
    async function fetchProduto() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProdutos(data);

        toast.update(toastId, {
          render: "Produto carregado!",
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
    fetchProduto();
  }, [id]);

  if (!produto) return null;

  return (
    <>
      <Heade/>
      <HeaderI />
      <Headers />
      <div className={styles.container}>
        <div className={styles.direita}>
          <img
            src={produto.image}
            alt={produto.title}
            className={styles.imagem}
          />
        </div>
        <div className={styles.esquerda}>
          <h1>{produto.title}</h1>
          <p>{produto.category}</p>
          <p>{produto.description}</p>
          <div className={styles.quantidade}>
            <div>
            <button onClick={diminuir}>
              -
            </button>
            <span>{quantidade}</span>
            <button onClick={aumentar}>
              +
            </button>
            </div>
          </div>
          <h2>R$ {produto.price}</h2>
          <div className={styles.açao}>
            <button className={styles.comprar}>Comprar agora</button>
            <button className={styles.carrinho}>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </>
  );
}
