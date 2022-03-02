import './card.scss'

export function Card(props){
    return(
        <div className="card-container">
            <h1 className="card-title">{props.name}</h1>
            <p className="card-years">{props.years}</p>
            <p className="card-seasons">{props.seasons}</p>
            <p className="card-synopsis">{props.synopsis}</p>
            <p className="card-category">{props.category}</p>
        </div>
    )
}