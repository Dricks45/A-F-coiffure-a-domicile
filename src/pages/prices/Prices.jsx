import { useEffect, useState } from "react";
import axios from "axios";
import "./prices.scss";

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

  return (
    <section className="outlet">
      <h2 className="title_prices">Liste des Tarifs</h2>
      <ul className="container_prices">
        {data.map((item) => (
          <li className="paragraph_prices" key={item.id}>
            {item.prestation} - Court : {item.court}, Long : {item.long}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Prices;
