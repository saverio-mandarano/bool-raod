import { Link } from "react-router-dom";
import headerImg from "../assets/pngegg.png";

function MainHeader() {
  return (
    <>
      <header className=" mb-3 d-flex justify-content-between header-settings">
        <div>
          <img src={headerImg} alt="" className="header-logo" />
        </div>

        <div className="button-margin">
          <Link to={`/`}>
            <span className="text-dark">
              {" "}
              <i className="link"> Homepage </i>{" "}
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
