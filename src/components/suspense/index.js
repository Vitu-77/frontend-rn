import React, { Fragment } from 'react';

const Suspense = ({ fallback, resource, children }) => {
    return (
        resource
            ? <Fragment>{children}</Fragment>
            : <Fragment>{fallback}</Fragment>
    )
}

export default Suspense;