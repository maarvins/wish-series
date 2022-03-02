import './card.scss'

export function Card(){
    return(
        <div className="card-container">
            <h1 className="card-title">Titulo</h1>
            <p className="card-years">Ano da serie</p>
            <p className="card-seasons">Temporadas</p>
            <p className="card-synopsis">Sinopse</p>
            <p className="card-category">Categoria</p>
        </div>
    )
}