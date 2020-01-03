import React from 'react';
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { moneyFormatter } from '../../util/stringHandler';

import './style.css';

const BarChart = ({ format = false, dataKey, data, scale = 500, color }) => {
    return (
        <Chart
            style={{ transform: 'translateY(70px)' }}
            width={scale}
            height={scale / 1.7}
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 10, }}
        >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey={dataKey[0]} />
            <YAxis />
            <Tooltip formatter={format ? moneyFormatter.format : null} />
            <Bar dataKey={dataKey[1]} fill={color} />
        </Chart>
    );
}

export default BarChart;