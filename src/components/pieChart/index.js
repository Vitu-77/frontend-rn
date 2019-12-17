import React from 'react';
import { PieChart as Chart, Pie, Tooltip } from 'recharts';

import './style.css';

const PieChart = ({ dataKey, scale = 400, data, color }) => {
    return (
        <Chart
            width={scale}
            height={scale / 1.5}
        >
            <Pie
                dataKey={dataKey}
                isAnimationActive={true}
                data={data}
                cx={scale / 2}
                cy={scale / 3}
                outerRadius={50}
                fill={color}
                label
                className='pie'
            />
            <Tooltip />
        </Chart>
    );
}

export default PieChart;