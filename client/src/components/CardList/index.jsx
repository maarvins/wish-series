import { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from '../Card'

import './cardList.scss'

export function CardList(){

    const [listSeries, setListSeries] = useState([])

    useEffect(async () => {
        await axios.get("http://localhost:3001/get_series").then((response) => {
        console.log(response.data)
        setListSeries(response.data)
    })
  }, [])

    return(
        <div className="card-list-container">
            <ul>
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
            </ul>
        </div>
    )
}