//import data
import TravelCard from "../components/TravelCard";
import travels_db from "../data/travels_db";

function HomePage() {
  return (
    <>
      <div className="container ">
        <h1 className="my-4 ">Lista viaggi attivi</h1>
        <div className="row g-4">
          {travels_db.map((travel) => (
            <div key={travel.id} className=" col-12 col-md-6 col-lg-4">
              <TravelCard travelProp={travel} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
