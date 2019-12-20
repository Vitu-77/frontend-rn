import React, { Fragment } from 'react';

const Suspense = ({ wait, fallback, resource, children }) => {
    if (resource === null) {
        return <Fragment>{wait}</Fragment>
    }
    else if (!resource?.general) {
        return <Fragment>{fallback}</Fragment>
    }
    else {
        return <Fragment>{children}</Fragment>
    }
}

export default Suspense;