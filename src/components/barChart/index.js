import React from 'react';
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import './style.css';

const BarChart = ({ scale = 500, data, color, hoverColor }) => {
    return (
        <Chart
            width={scale}
            height={scale / 1.7}
            data={data}
            margin={{ top: 35, right: 30, left: 20, bottom: 5, }}
        >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill={color} />
        </Chart>
    );
}

export default BarChart;