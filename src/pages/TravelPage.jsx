//importo hook per utilizzo parametri dinamici
import { useParams } from "react-router-dom"
//importo db fittizzio
import travels from "../data/travels_db"
//importo travelercard
import TravelerCard from "../components/TravelerCard"

function TravelPage() {
    //ricavo id dimanico usando params 
    const { id } = useParams()
    //definisco viaggio usando id dinamico e metodo find per ciclare arrai viaggi finche non trovo quello con il medesimo id del mio url
    const travel = travels.find((t) => t.id === Number(id))

    return (
        //card dettaglio viaggio
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <img src={travel.img_url} alt={travel.localita} />
                    <h5 className="card-title">{travel.localita}</h5>
                    <p className="card-text">{travel.descrizione}</p>
                    <p className="card-text">Tipologia: {travel.tipo_viaggio}</p>
                    <p className="card-text">Partenza: {travel.data_inizio}</p>
                    <p className="card-text">Ritorno: {travel.data_fine}</p>
                </div>
            </div>
            <ul className="list-group">
                {travel.partecipanti.map((partecipante) => ( //mappo array partecipanti contenuto nel travel trovato dal find per render lista pareticmapti
                    <TravelerCard key={partecipante.id} traveler={partecipante} />
                ))}
            </ul>
        </div>
    )
}

export default TravelPage