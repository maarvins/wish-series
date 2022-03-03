import { useEffect, useState } from 'react'

import { Form } from './components/Form'
import { Header } from './components/Header'
import { Card } from './components/Card'
import axios from 'axios';

import './App.scss';

function App() {
  const [listSeries, setListSeries] = useState([])

  useEffect(async () => {
    await axios.get("http://localhost:3001/get_series").then((response) => {
      console.log(response.data)
      setListSeries(response.data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Form />
      {listSeries.map((value) => {
        return (
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
          />)
      })
      }

    </div>
  );
}

export default App;
