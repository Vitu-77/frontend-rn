import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

import './style.css';

const FullFilledPizzaChart = ({ dataKey, scale = 400, data, color }) => {
    return (
        <PieChart
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
        </PieChart>
    );
}

export default FullFilledPizzaChart;