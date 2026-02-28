import { Link } from "react-router-dom"
import headerImg from "../assets/pngegg.png"

function MainHeader() {
    return (
        <>
            <header>


                <div className="container my-3">

                    <div className="d-flex justify-content-between header-settings">
                        <Link to={`/`}>
                            <img src={headerImg} alt="" className="header-logo" />
                        </Link>
                        {/* AGGIUNTO LOGO DA RIDIMENSIONARE IN CSS */}
                        <Link to={`/`}>
                            <button className="btn btn-primary"> Homepage </button>
                        </Link>
                    </div>



                </div>

            </header >

        </>
    )
}

export default MainHeader