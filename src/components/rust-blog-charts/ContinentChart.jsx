import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ContinentChart = () => {
  const data = {
    labels: [
      "Oceania",
      "Antarctica",
      "Asia",
      "South America",
      "North America",
      "Europe",
      "Africa",
    ],
    datasets: [
      {
        data: [
          5063650, 3500, 42602750, 26189600, 76068150, 47540200, 10777350,
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#63ff8aff",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        onHover: (event, legendItem, legend) => {
          const index = legendItem.index;
          const chart = legend.chart;

          chart.tooltip.setActiveElements([{ datasetIndex: 0, index }], {
            x: event.native.clientX,
            y: event.native.clientY,
          });
          chart.update();
        },

        onLeave: (event, legendItem, legend) => {
          const chart = legend.chart;
          chart.tooltip.setActiveElements([], { x: 0, y: 0 });
          chart.update();
        },

      },
    },
  };

  return (
    <div className="chart-container" style={{ height: '350px', width: '100%', position: 'relative' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ContinentChart;
