import React from 'react'
import OfferCard from '../components/OfferCard'

function WhatDoIOffer() {
    return (
        <section className="what-do-i-offer-sec">
            <h5 className="heading">What do I offer</h5>
            <h3 className="main-heading">Designing Solutions <span>Customized to Meet<br />
                Your Requirements</span>
            </h3>
            <div className="offer-grid">
                <OfferCard />
            </div>
        </section>
    )
}

export default WhatDoIOffer