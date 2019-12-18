import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ description, title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="noopener noreferrer" />
        </Helmet>
    )
}

export default Head;