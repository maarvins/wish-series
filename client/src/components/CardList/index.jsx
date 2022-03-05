import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Card";

import "./cardList.scss";

export function CardList() {
  const [listSeries, setListSeries] = useState([]);

  useEffect(async () => {
    await axios.get("http://localhost:3001/get_series").then((response) => {
      console.log(response.data);
      setListSeries(response.data);
    });
  }, []);

  return (
    <div className="card-list-container">
      <ul>
        <h1 className="card-title">Lista de Séries</h1>
        {listSeries.map((value) => {
          return (
            <div>
              <Card
                key={value.id}
                listCard={listSeries}
                setListCard={setListSeries}
                id={value.id}
                name={value.name}
                year={value.year}
                seasons={value.seasons}
                synopse={value.synopse}
                category={value.category}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
