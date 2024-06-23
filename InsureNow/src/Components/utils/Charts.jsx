import React from 'react';
import { Doughnut, Bar, Pie,Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './charts.css'

const randomData = (num) => {
  return Array.from({ length: num }, () => Math.floor(Math.random() * 100));
};

const doughnutData = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: randomData(6),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const barData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: randomData(6),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: randomData(6),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: randomData(7),
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};


function Charts() {
  return (

    <div className='chart-body'>
      
      <div className='bar-chart'>
        <h2>Bar Chart</h2>
        <Bar data={barData} />
      </div>
      <div className='head-charts'>
      <div className='dougnut-chart'>
        <h2 >Doughnut Chart</h2>
        <Doughnut data={doughnutData} />
      </div>
     

      <div className='dougnut-chart'>
        <h2 >Doughnut Chart</h2>
        <Doughnut data={doughnutData} />
      </div>
      </div>


      <div className='dougnut-chart'>
        <h2>Pie Chart</h2>
        <Pie data={pieData} />
      </div>

      <div className='dougnut-chart'>
        <h2>Pie Chart</h2>
        <Pie data={pieData} />
      </div>

      <div className="line-chart">
        <h2>Line Chart</h2>
        <Line data={lineData} />
      </div>
    </div>
  );
}

export default Charts;
