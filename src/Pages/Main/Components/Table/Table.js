import React from "react";
import styled from "styled-components";
import Columns from "./Components/Columns";
import Rows from "./Components/Rows";

function Table({ persons, deaths }) {
  const getDeathDate = (personId) => {
    const filteredData = deaths.some(
      (death) => death["person_id"] === personId
    );
    return filteredData ? 1 : 0;
  };

  return (
    <TableContainer>
      <thead>
        <Columns />
      </thead>
      <tbody>
        {persons.length > 0 &&
          persons.map((person) => (
            <Rows
              key={person["person_id"]}
              data={person}
              death={getDeathDate(person["person_id"])}
            />
          ))}
      </tbody>
    </TableContainer>
  );
}

export default Table;

const TableContainer = styled.table`
  position: relative;
  ${({ theme }) => theme.tableStyle};
`;
