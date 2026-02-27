import { useState } from "react"

import travels_db from "../data/travels_db"

function HomePage() {

    return (
        <section>
            <h2>Lista viaggi</h2>
            <div className="travel-list">
                <div className="wrap-travel">
                    <div className="single-travel"></div>
                </div>
            </div>

        </section>
    )

}

export default HomePage