import React, { Fragment } from 'react';

const Suspense = ({ wait, fallback, resource, fallbackParam, children }) => {
    if (resource === null) {
        return <Fragment>{wait}</Fragment>
    }
    else if (!Array(resource).length || resource.length === 0) {
        return <Fragment>{fallback}</Fragment>
    }
    else {
        return <Fragment>{children}</Fragment>
    }
}

export default Suspense;