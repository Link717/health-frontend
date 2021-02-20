import { Pie } from "react-chartjs-2";
import styled from "styled-components";

function Chart({ chartData, title }) {
  const categories = Object.keys(chartData);
  const counts = Object.values(chartData);

  const data = {
    labels: categories,
    datasets: [
      {
        data: counts,
        backgroundColor: [
          "#fd7c78",
          "#70dafc",
          "#fed085",
          "#b9e88b",
          "#82a5fc",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      fontSize: 16,
      text: title,
    },
    legend: {
      responsive: true,
      position: "bottom",
    },
  };

  return (
    <ChartOverlay>
      <ChartContainer>
        <Pie data={data} options={options} height={400} />
      </ChartContainer>
    </ChartOverlay>
  );
}

export default Chart;

const ChartOverlay = styled.div`
  display: inline-block;
  width: 30%;
  /* min-height: 365px;
  max-height: 400px; */
  padding: 40px 0 40px;
`;

const ChartContainer = styled.section`
  width: 90%;
  max-width: 1060px;
  margin: 0 auto;
`;
