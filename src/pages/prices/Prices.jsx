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
      <hr />
      <div className="container_prices">
        {data.map((item) => (
          <p className="paragraph_prices" key={item.id}>
            {item.prestation} = <br /> Court : {item.court}, Long : {item.long}
          </p>
        ))}
        <p>Imprimer les tarifs</p>
      </div>
    </section>
  );
}

export default Prices;
