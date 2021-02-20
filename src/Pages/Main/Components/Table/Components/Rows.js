import styled from "styled-components";

function Rows({ data, death }) {
  const transToDate = (data) => {
    return data.substr(0, 11);
  };

  const transToAge = (year, month, day) => {
    const today = new Date();
    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const person = {
    id: data["person_id"],
    gender: data["gender_source_value"],
    birth: transToDate(data["birth_datetime"]),
    age: transToAge(
      data["year_of_birth"],
      data["month_of_birth"] - 1,
      data["day_of_birth"]
    ),
    race: data["race_source_value"],
    death,
  };
  return (
    <TableRowContainer>
      <td>{person.id}</td>
      <td>{person.gender}</td>
      <td>{person.birth}</td>
      <td>{person.age}</td>
      <td>{person.race}</td>
      <td>{person.death}</td>
    </TableRowContainer>
  );
}

export default Rows;

const TableRowContainer = styled.tr`
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.mainGrey};

  td {
    position: relative;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
  }
`;
