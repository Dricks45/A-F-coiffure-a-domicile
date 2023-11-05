import { useEffect, useState } from "react";
import axios from "axios";
import "./tarifs.scss";

function Tarifs() {
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
      <h1>Liste des Tarifs</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.prestation} - Court : {item.court}, Long : {item.long}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tarifs;
