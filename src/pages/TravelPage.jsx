//attivo lo use state per var di stato
import { useState } from "react";
//importo hook per utilizzo parametri dinamici
import { useParams } from "react-router-dom";
//importo db fittizzio
import travels from "../data/travels_db";
//importo travelercard
import TravelerCard from "../components/TravelerCard";

function TravelPage() {
  //imposto var di stato che mi ritorna input utente
  const [inputData, setInputData] = useState('')
  //ricavo id dimanico usando params
  const { id } = useParams();
  //definisco viaggio usando id dinamico e metodo find per ciclare arrai viaggi finche non trovo quello con il medesimo id del mio url
  const travel = travels.find((t) => t.id === Number(id));
  //uso metodo filter per tornare un array filtrato che contenga nomi o parti di nomi in comune sia con il mio array di partenza sia con l'input della searchbar
  const filteredTraveler = travel.partecipanti.filter(p => p.nome.toLocaleLowerCase().includes(inputData.toLocaleLowerCase())
  || //normalizzo sia il nome che pesco da array sia quello che arriva da input con .tolowercase(), uso operatore logico OR || per inludere anche il cognome nella ricerca
  p.cognome.toLocaleLowerCase().includes(inputData.toLocaleLowerCase()))

  return (
    //card dettaglio viaggio
    <div className="container">
      <section
        id="travel-details"
        className="card my-4 w-100 bg-body-secondary"
      >
        <div className="row g-0 anteprima">
          <div className="col-md-5 moviepage">
            <img
              src={travel.img_url}
              className="card-img-top object-fit-cover fixed-height"
              alt={travel.localita}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{travel.localita}</h5>
              <p className="card-text">{travel.descrizione}</p>
              <address>
                <i>Tipo di viaggio: {travel.tipo_viaggio}</i>
              </address>
              <h6>More Details:</h6>
              <ul>
                <li>Data inizio viaggio: {travel.data_inizio}</li>
                <li>Data fine viaggio: {travel.data_fine}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* search bar per filtraggio turisti */}
      <div className="input-group mb-3 mt-5">
        <input onChange={(e) => setInputData(e.target.value)} //uso onchage per avere dinamicamente input utente, lo passo alla funzione di setter che mi cambia dimanicamente il mio inputData
          type="text"
          className="form-control"
          placeholder="Nome turista"
          aria-label="Cerca turista"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-success" type="button" id="button-addon2">
          Cerca
        </button>
      </div>
      <ul className="list-group mb-5">
        {filteredTraveler.map(
          (
            partecipante, //mappo array partecipanti contenuto nel travel trovato dal find per render lista pareticmapti
          ) => (
            <TravelerCard key={partecipante.id} traveler={partecipante} />
          ),
        )}
      </ul>
    </div>
  );
}

export default TravelPage;
