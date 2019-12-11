import React, { /*useState,*/ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCountyInfos } from '../../services/api';

const County = () => {
    const { countyName } = useParams();

    useEffect(() => {
        getCountyInfos(countyName);
    });

    return (
        <h1>{countyName}</h1>
    )
}

export default County;