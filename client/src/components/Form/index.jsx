import React, { useState, useEffect } from "react";
import "./form.scss";
import axios from "axios";
import Select from "react-select";

export function Form() {
  const [value, setValues] = useState(); //pegando valores do formulario

  const [getYears, setGetYears] = useState([]);

  const years = [];
  useEffect(async () => {
    await axios.get("http://localhost:3001/get_years").then((response) => {
      response.data.forEach((value) => {
        years.push({
          value: value.id,
          label: value.year,
        });
      });
      setGetYears(years);
    });
  }, []);

  const [getCategories, setGetCategories] = useState([]);

  const categories = [];
  useEffect(async () => {
    await axios.get("http://localhost:3001/get_categories").then((response) => {
      response.data.forEach((value) => {
        categories.push({
          value: value.id,
          label: value.category,
        });
      });
      setGetCategories(categories);
    });
  }, []);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const [handleYear, setHandleYear] = useState(0);

  // const handleInputYear = (e) => {
  //   let { label, value } = e.target;
  //   setHandleYear(value);
  // };

  const handleClickButton = () => {
    axios
      .post("http://localhost:3001/register", {
        name: value.name,
        fk_year: 1,
        seasons: value.seasons,
        synopse: value.synopse,
        fk_category: 1,
      })
      .then((response) => {
        console.log(response);
      }); //guardando os valores do formulario
  };

  return (
    <div className="register-container">
      <h1>Adicionar Série</h1>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        onChange={handleChangeValues}
      />
      <Select
        name="year"
        options={getYears}
        // onCHange={setHandleYear({ fk_year: value.id })}
      />
      <input
        type="text"
        name="seasons"
        placeholder="Temporadas"
        onChange={handleChangeValues}
      />
      <input
        type="text"
        name="synopse"
        placeholder="Sinopse"
        onChange={handleChangeValues}
      />
      <Select options={getCategories} onChange={handleChangeValues} />
      <button onClick={() => handleClickButton()}>Cadastrar</button>
    </div>
  );
}
