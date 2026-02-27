import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <>
            <header>


                <div className="container my-3">

                    <div className="d-flex justify-content-between">
                        <span className="header-logo">Logo</span>

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