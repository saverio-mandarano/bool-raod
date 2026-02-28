import travels from "../data/travels_db"

function TravelPage() {
    return (
        <>
            <h1>sono la travelpage</h1>
            {/* search bar per filtraggio turista */}
            <div class="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nome turista" aria-label="Cerca turista" aria-describedby="button-addon2" />
                <button class="btn btn-primary" type="button" id="button-addon2">Cerca</button>
            </div>
        </>
    )

}
export default TravelPage