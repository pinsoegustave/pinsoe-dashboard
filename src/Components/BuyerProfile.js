import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
    { name: 'Male', value: 548 },
    { name: 'Female', value: 620 },
    { name: 'Other', value: 210 },
]
const RADIAN = Math.PI /100
const COLORS = ['#00C49F','#FFBB2B','#FF8042']

const renderCustomizedLabel = ({ cx,cy,midAngle, innerRadius, outerRadius, percent }) => {
    const radius =innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

export const BuyerProfile = () => {
  return (
    <div className='w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col'>
        <strong className='text-gray-700 font-medium'>Buyer Profile</strong>
        <div className="w-full mt-3 flex-1 text-xs">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={300}>
                    <Pie
                        data={data}
                        cx="60%"
                        cy="45%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={105}
                        fill="#8884d8"
                        dataKey="value"
                    >   
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}