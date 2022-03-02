import React, {useState} from 'react'
import './form.scss'
import Axios from 'axios'

export function Form(){

    const [value, setValues] = useState() //pegando valores do formulario
    const handleChangeValues = value => {
      setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))
  }

    const handleClickButton = () => {
      Axios.post("http://localhost:3001/register", {
        name: value.name,
        fk_year: value.fk_year,
        seasons: value.seasons,
        synopse: value.synopse,
        fk_category: value.fk_category,
      }).then((response) => {
        console.log(response)
      }) //guardando os valores do formulario 
    }

    return(
        <div className="register-container">
          <h1>Adicionar Série</h1>
          <input 
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChangeValues}
          />
          <input 
          type="number"
          name="fk_year"
          placeholder="Ano de lançamento"
          onChange={handleChangeValues}
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
          <input 
          type="text"
          name="fk_category"
          placeholder="Categoria"
          onChange={handleChangeValues}
          />
          <button onClick={() => handleClickButton()}>Cadastrar</button>
        </div>
    )
}