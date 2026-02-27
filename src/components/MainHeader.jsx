import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <>
            <header>


                <div className="container my-3">

                    <div className="d-flex justify-content-between">
                        {/* <span className="header-logo">Logo</span> */}
                        <img src="https://e7.pngegg.com/pngimages/318/944/png-clipart-logo-travel-agent-train-airline-ticket-travel-text-logo-thumbnail.png" alt="" />
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