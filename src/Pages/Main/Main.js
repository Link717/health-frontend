import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "./useFetch";
import { setCondition } from "../../store/modules/UpdateCondition";
import { setDeath } from "../../store/modules/UpdateDeath";
import { setPerson } from "../../store/modules/UpdatePeson";
import { setVisit } from "../../store/modules/UpdateVisit";
import Chart from "./Components/Chart/Chart";
import SelectBox from "./Components/Table/Components/SelectBox";
import Table from "./Components/Table/Table";

const CHARTS = [
  { id: 0, category: "gender_source_value", title: "성별 환자 수" },
  { id: 1, category: "race_source_value", title: "인종별 환자 수" },
  { id: 2, category: "ethnicity_source_value", title: "민족별 환자 수" },
];

function Main() {
  const dispatch = useDispatch();
  dispatch(setCondition(useFetch("condition_occurrence")));
  dispatch(setDeath(useFetch("death")));
  dispatch(
    setPerson(
      useFetch("person").sort((a, b) => a["person_id"] - b["person_id"])
    )
  );
  dispatch(setVisit(useFetch("visit_occurrence")));

  const persons = useSelector((store) => store.setPersonReducer);
  const deaths = useSelector((store) => store.setDeathReducer);
  const makeChartData = (category) => {
    let chartObj = {};
    for (let person of persons) {
      chartObj[person[category]]
        ? chartObj[person[category]]++
        : (chartObj[person[category]] = 1);
    }
    return chartObj;
  };

  return (
    <MainContainer>
      <ChartContainer>
        {CHARTS.map((chart) => (
          <Chart
            key={chart.id}
            chartData={makeChartData(chart.category)}
            title={chart.title}
          />
        ))}
      </ChartContainer>
      <SelectBox />
      <TableContainer>
        <Table persons={persons} deaths={deaths} />
      </TableContainer>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div``;

const ChartContainer = styled.div`
  ${({ theme }) => theme.flex("center", null, null)};
  ${({ theme }) => theme.container};
  margin: 0 auto;
`;

const TableContainer = styled.div`
  ${({ theme }) => theme.flex("center", null, null)};
  ${({ theme }) => theme.container};
  margin: 0 auto;
`;
