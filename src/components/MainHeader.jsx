import { NavLink } from "react-router-dom";
import headerImg from "../assets/pngegg.png";

function MainHeader() {
    return (
        <>
            <header className=" mb-3 d-flex justify-content-between header-settings">
                <div>
                    <img src={headerImg} alt="" className="header-logo" />
                </div>


                <div className="button-margin">
                    <NavLink to={`/`}>
                        <span className="btn btn-light"> <i> Homepage </i> </span>
                    </NavLink>
                </div>

            </header>
        </>
    );
}

export default MainHeader;
