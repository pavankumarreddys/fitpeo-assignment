import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const PieChartsImp = () => {
    const options = {
        series: [65],
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '55%',
            },
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total New customers',
                color: 'gray'
              },
            },
            colors: ['#0088FE', '#00C49F', 'red'], // Define the colors here
          },
        },
      };
    
      return (
        <div id="chart" className='text-center'>
            <h1>Customers</h1>
            <p>Customers that buy products</p>
          <ReactApexChart options={options} series={options.series} type={options.chart.type} height={options.chart.height} />
        </div>
      );
};
