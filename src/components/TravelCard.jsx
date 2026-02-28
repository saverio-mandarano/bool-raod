import { Link } from "react-router-dom";

// funzione per settaggio single card per homePage
function TravelCard(props) {

    // destrutturo props
    const { id, img_url, localita, descrizione } = props.travelProp;

    return (
        <>
            <img
                src={img_url}
                className="card-img-top"
                alt={localita}
            />
            <div className="card-body">
                <h5 className="card-title">{localita}</h5>
                <p className="card-text">{descrizione}</p>
            </div>
            <Link to={`travels/${id}`}>
                <button className="btn btn-primary">Dettagli Viaggio</button>
            </Link>
        </>
    )
}

export default TravelCard