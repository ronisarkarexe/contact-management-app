import { useQuery } from "@tanstack/react-query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
    const {
      data: covidCases = [],
      isLoading,
      isError,
    } = useQuery({
      queryFn: async () => {
        const res = await fetch("https://disease.sh/v3/covid-19/all");
        const data = res.json();
        return data;
      },
    });

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error fetching data</div>;
    }

    const chartData = {
      labels: Object.keys(covidCases),
      datasets: [
        {
          label: "COVID-19 Cases",
          data: Object.values(covidCases),
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

  return (
    <div>
      <h1>Showing the cases fluctuations</h1>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
