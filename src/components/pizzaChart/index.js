import React, { useState } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import './style.css';

const PizzaChart = ({ dataKey, scale = 400, data, color, hoverColor }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
            cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            payload, percent, value,
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text
                    className='chart-center-text'
                    x={cx}
                    y={cy}
                    dy={8}
                    textAnchor="middle"
                    fill={hoverColor}
                >
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={hoverColor}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={hoverColor}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={hoverColor} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={hoverColor} stroke="none" />
                <text className='primary-text' x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
                    {`Total: ${value}`}
                </text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };

    const onPieEnter = (data, index) => {
        setActiveIndex(index);
    };

    return (
        <PieChart
            width={scale}
            height={scale / 1.5}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={scale / 2}
                cy={scale / 3}
                innerRadius={40}
                outerRadius={60}
                fill={color}
                dataKey={dataKey}
                onMouseEnter={onPieEnter}
            />
        </PieChart>
    );
}

export default PizzaChart;