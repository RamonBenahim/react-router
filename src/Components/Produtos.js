import React from "react";
import styles from "./Produtos.module.css";
import { NavLink } from "react-router-dom";
import Head from "./Head";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);
  if (produtos === null) return null;
  return (
    <section className={styles.produtos + " animeLeft"}>
      <Head title="Todos os Produtos." />

      {produtos.map((produto) => {
        return (
          <NavLink to={`/produto/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <h1 className={styles.nome}>{produto.nome}</h1>
          </NavLink>
        );
      })}
    </section>
  );
};

export default Produtos;
