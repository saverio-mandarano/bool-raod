import { Link } from "react-router-dom";

// funzione per settaggio single card per homePage
function TravelCard(props) {
  // destrutturo props
  const { id, img_url, localita, descrizione } = props.travelProp;

  return (
    <div className="card h-100">
      <img
        src={img_url}
        className="card-img-top object-fit-cover fixed-height"
        alt={localita}
      />
      <div className="card-body">
        <h5 className="card-title">{localita}</h5>
        <p className="card-text">{descrizione}</p>
      </div>
      <Link to={`travels/${id}`}>
        <span className="ps-3"><i>Dettagli Viaggio</i></span>
      </Link>
    </div>
  );
}

export default TravelCard;
