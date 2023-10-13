import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Label } from "recharts"

const data = [
  {
    CustomersCount: 809680,
    Customers: "x",
  },
  {
    CustomersCount: 955668,
    Customers: "y",
  },
  {
    CustomersCount: 1234575,
    Customers: "z",
  },
]

export const PieChartsImp = () => {
  return (
    <div className="flex flex-col p-2">
      <h1 className="font-bold">Customers</h1>
      <p className='font-bolder text-slate-500'>Customers that buy products</p>
      <ResponsiveContainer height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="55%"
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="70%"
            outerRadius="90%"
            dataKey="CustomersCount"
          >
            <Cell fill="#13f052" />
            <Cell fill="#dce3de" />
            <Cell fill="#a44c9e" />
            <Label
              value="65% Total New customers"
              position="center"
              fill="#000" 
              
              
            />
          </Pie>
          <Legend
            iconType="none"
            layout="vertical"
            verticalAlign="middle"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
      
    </div>
  )
}



// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// export const PieChartsImp = () => {
//     const options = {
//         series: [65],
//         chart: {
//           height: 350,
//           type: 'radialBar',
//         },
//         plotOptions: {
//           radialBar: {
//             hollow: {
//               size: '55%',
//             },
//             dataLabels: {
//               name: {
//                 fontSize: '22px',
//               },
//               value: {
//                 fontSize: '16px',
//               },
//               total: {
//                 show: true,
//                 label: 'Total New customers',
//                 color: 'gray'
//               },
//             },
//             colors: ['#0088FE', '#00C49F', 'red'], // Define the colors here
//           },
//         },
//       };
    
//       return (
//         <div id="chart" className='p-2'>
//             <h1>Customers</h1>
//             <p>Customers that buy products</p>
//           <ReactApexChart options={options} series={options.series} type={options.chart.type} height={options.chart.height} />
//         </div>
//       );
// };
