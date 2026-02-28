//importo usestate per avere var dinameche
import { useState } from "react"

const TravelerCard = ({ traveler }) => {
    //imposto var di satao che gestisce il togle aperto chiuso
    const [isOpen, SetIsOpen] = useState(false)

    return (
        //aggiungo onclick al mio li per settare il il NOT var di stato
        <li onClick={() => SetIsOpen(!isOpen)} className="list-group-item">{traveler.nome} {traveler.cognome}
            {isOpen && <ul className="list-group">
                <li className="list-group-item">Data di nascita: {traveler.data_nascita}</li>
                <li className="list-group-item">Codice fiscale: {traveler.cf}</li>
                <li className="list-group-item">Cellulare: {traveler.telefono}</li>
                <li className="list-group-item">e-Mail: {traveler.mail}</li>
            </ul>}
        </li>// conditionl rendering se isOpen é true mostra il contenuto
    )
}

export default TravelerCard