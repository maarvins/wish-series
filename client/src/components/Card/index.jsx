import './card.scss'

export function Card(props){
    return(
        <div className="card-container">
            <h1 className="card-title">Título:{props.name}</h1>
            <p className="card-years">Ano de Lançamento:{props.year}</p>
            <p className="card-seasons">Temporadas: {props.seasons}</p>
            <p className="card-synopsis">Sinopse: {props.synopse}</p>
            <p className="card-category">Categoria: {props.category}</p>
        </div>
    )
}