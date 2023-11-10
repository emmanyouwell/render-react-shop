import React from 'react'
import { Helmet } from 'react-helmet'
const Metadata = () => {
    return (
        <Helmet>
            <title>{`${title} - ShopIT`}</title>
        </Helmet>
    )
}

export default Metadata