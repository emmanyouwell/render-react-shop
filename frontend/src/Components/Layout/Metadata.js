import React from 'react'
import { Helmet } from 'react-helmet'
const MetaData = () => {
    return (
        <Helmet>
            <title>{`${title} - ShopIT`}</title>
        </Helmet>
    )
}

export default MetaData