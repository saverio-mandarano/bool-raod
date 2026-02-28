//import data
import TravelCard from "../components/TravelCard";
import travels_db from "../data/travels_db";

function HomePage() {
  return (
    <>
      <h1 className="mt-3 container">Lista viaggi attivi</h1>
      <div className="card-container d-flex flex-wrap justify-content-center">
        {travels_db.map((travel) => (
          //   <CardViaggio key={travel.id} travelProp={travel} />
          <div key={travel.id} className="card m-2 w-25">
            <TravelCard travelProp={travel} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
