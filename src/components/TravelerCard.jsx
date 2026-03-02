const TravelerCard = ({ traveler }) => {
  const collapseId = `collapse-${traveler.id}`;
  return (
    <div className="accordion">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          {traveler.nome} {traveler.cognome}
        </button>
      </h2>
      <div id={collapseId} className="accordion-collapse collapse ps-5">
        <p>Data di nascita: {traveler.data_nascita}</p>
        <p>Codice fiscale: {traveler.cf}</p>
        <p>Cellulare: {traveler.telefono}</p>
        <p>Email: {traveler.mail}</p>
      </div>
    </div>
  );
};

export default TravelerCard;
