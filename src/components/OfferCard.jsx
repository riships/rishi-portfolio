import React from 'react'
import styled from 'styled-components'

function OfferCard() {
    return (
        <OfferCardBox>
            <h6 className="heading-card">
                Web & App Development
            </h6>

        </OfferCardBox>
    )
}

const OfferCardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid var(--light-gray);

    .icon {
        width: 24px;
        height: 24px;
        color: gray;
    }
    h6.heading-card{
        font-size: 22px;
        font-weight: 600;
        color: #000;
    }
`;


export default OfferCard