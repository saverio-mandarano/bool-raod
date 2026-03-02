//import data
import TravelCard from "../components/TravelCard";
import travels_db from "../data/travels_db";

function HomePage() {
  return (
    <>
      <h1 className="mt-3 container">Lista viaggi attivi</h1>
      <div className="container ">
        <div className="row g-4">
          {travels_db.map((travel) => (
            <div key={travel.id} className="card col-12 col-md-6 col-lg-4">
              <TravelCard travelProp={travel} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
