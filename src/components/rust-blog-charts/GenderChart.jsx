import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderChart = () => {
    const data = {
        labels: ["Male", "Female", "Others", "Prefer not to say"],
        datasets: [
            {
                data: [112514752, 107026128, 17837688, 1758043],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(223, 45, 0, 0.8)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(223, 45, 0, 1)',
                ],
                borderWidth: 1,
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

export default GenderChart;
