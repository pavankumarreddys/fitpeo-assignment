import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import {PieChartsImp} from './PieChartsImp'
const data = [
    { name: 'Jan', uv: 400, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'Feb', uv: 200, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'Mar', uv: 300, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'Apr', uv: 250, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'May', uv: 200, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'Jun', uv: 100, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'July', uv: 350, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'Aug', uv: 500, pv: 2400, amt: 2400, fill: '#8884d8' }, // Set fill color for August
    { name: 'Sep', uv: 290, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'Oct', uv: 360, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'Nov', uv: 340, pv: 2400, amt: 2400, fill: 'gray' },
    { name: 'Dec', uv: 270, pv: 2400, amt: 2400, fill: 'gray' },
  ];
  

export const Barchart = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>
        <div className='col-span-3 shadow-xl lg:col-span-2 '>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='font-bold'>Overview</h1>
                <p className='font-bolder text-slate-500'>Monthly earnings</p>
             </div>
            <select className='rounded'>
                <option>Quarterly</option>
                <option>Yearly</option>
            </select>
        </div>
        <BarChart  width={
          window.innerWidth < 450
            ? 300  // Small screen (sm)
            : window.innerWidth < 600
            ? 450  // Medium screen (md)
            : 600  // Large screen (lg)
        } height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    {/* <YAxis /> */}
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="fill"  barSize={30} />
    
        </BarChart>
        </div>
        <div className='col-span-3 shadow-xl lg:col-span-1 '>
            <PieChartsImp/>
        </div>
    </div>
  )
}
