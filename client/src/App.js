import { useEffect, useState } from 'react'

import { Form } from './components/Form'
import { Header } from './components/Header'
import { Card } from './components/Card'
import axios from 'axios';

import './App.scss';

function App() {
  const [listSeries, setListSeries] = useState()

  useEffect(() => {
    axios.get("http://localhost:3001/getCards").then((response) => {
      setListSeries(response.data)
    })
  })

  return (
  <div className="App">
      <Header />
      <Form />
      {listSeries?.map((value) => {
         return (
         <Card 
          key={value.id} 
          listCard={listSeries} 
          setListCard={setListSeries} 
          id={value.id} 
          name={value.name}
          years={value.years}
          seasons={value.seasons}
          synopsis={value.synopsis}
          category={value.category}
         />)
        })
      }
      
  </div>
  );
}

export default App;
