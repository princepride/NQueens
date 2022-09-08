import "./LineChart.css";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'N Queens Chart',
      },
    },
  };
  
  const labels = ['One Queens', 'Two Queens', 'Three Queens', 'Four Queens',
   'Five Queens', 'Six Queens', 'Seven Queens', 'Eight Queens', 'Nine Queens']
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,0,0,2,10,4,40,92,352],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

const LineChart = () => {
    return <Line options={options} data={data} />;
}

export default LineChart;