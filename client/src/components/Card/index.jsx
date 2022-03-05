import { useState } from "react";
import "./card.scss";
import AlertDialog from "../AlertDialog";

export function Card(props) {
  //abrir a função editar somente ao clicar no card
  const [open, setOpen] = useState(false);

  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    <>
      <AlertDialog
        open={open}
        setOpen={setOpen}
        id={props.id}
        name={props.name}
        year={props.year}
        seasons={props.seasons}
        synopse={props.synopse}
        category={props.category}
        listSeries={props.listSeries}
        setListSeries={props.setListSeries}
      />
      <div className="card-container" onClick={() => handleClickCard()}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-years">Ano de Lançamento:{props.year}</p>
        <p className="card-seasons">Temporadas: {props.seasons}</p>
        <p className="card-synopsis">Sinopse: {props.synopse}</p>
        <p className="card-category">Categoria: {props.category}</p>
      </div>
    </>
  );
}
