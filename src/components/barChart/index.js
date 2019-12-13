import React from 'react';
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

import './style.css';

const BarChart = ({ data }) => {
    return (
        <Chart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 35, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3434A8" />
        </Chart>
    );
}

export default BarChart;