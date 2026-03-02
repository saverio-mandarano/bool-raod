import { Link } from "react-router-dom";
import headerImg from "../assets/pngegg.png";

function MainHeader() {
    return (
        <>
            <header className=" mb-3 d-flex justify-content-between header-settings">
                <div>
                    <img src={headerImg} alt="" className="header-logo" />
                </div>



                <Link to={`/`}>
                    <button className="btn btn-primary"> Homepage </button>
                </Link>
            </header>
        </>
    );
}

export default MainHeader;
