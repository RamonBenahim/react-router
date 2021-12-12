import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de Escrever" />
      <div>
        <h1>Entre em Contato</h1>
        <ul className={styles.dados}>
          <li>exemplo@exemplo.com</li>
          <li>(21) 99999-9999</li>
          <li>Rua. Batraque Churuli.</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
