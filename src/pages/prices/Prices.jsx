import { useEffect, useState } from "react";
import axios from "axios";
import "./prices.scss";
import "./print.scss";

function Prices() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Utilisation d'Axios pour récupérer le fichier JSON
    axios
      .get("../../src/assets/datas.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données JSON : " + error
        );
      });
  }, []);

  const handleprint = () => {
    window.print();
  };

  return (
    <section className="outlet">
      <h2 className="title_prices">Liste des Tarifs</h2>
      <hr />

      <div className="container_prices">
        <p className="paragraph_prices">Uniquement sur rendez-vous.</p>
        {data.map((item) => (
          <p className="paragraph_prices" key={item.id}>
            {item.prestation} = <br /> Court : {item.court}, Long : {item.long}
          </p>
        ))}
        <p className="paragraph_prices">
          Frais de déplacement à partir de 20 km : 1 € / km.
        </p>
        <button className="print_prices" onClick={handleprint}>
          Imprimer les tarifs
        </button>
      </div>
      <p className="group_rates">
        Tarifs groupe : Rejoignez vous chez un(e) ami(e) et bénéficiez de 3 € de
        remise par forfait à partir de 3 personnes &quot;hors tarifs
        enfants&quot;.
      </p>
      <p className="text_print">TEL : 07.82.32.11.79</p>
    </section>
  );
}

export default Prices;
