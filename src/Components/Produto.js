import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [params.id]);

  if (loading) return <div className="loading"></div>;
  if (error === true) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + " animeLeft"}>
      <Head title={produto.nome} description={produto.nome} />
      <div>
        {produto.fotos.map((foto) => {
          return <img src={foto.src} alt={foto.id} />;
        })}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
