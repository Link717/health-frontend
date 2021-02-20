import React from "react";

const COLUMNS = [
  { id: "persion_id", name: "환자 ID" },
  { id: "gender_source_value", name: "성별" },
  { id: "birth_datetime", name: "생년월일" },
  { id: "persion_age", name: "나이" },
  { id: "race_source_value", name: "인종" },
  { id: "death_date", name: "사망 여부" },
];

function Columns() {
  return (
    <tr>
      {COLUMNS.map((column) => (
        <th scope="col" key={column.id}>
          {column.name}
        </th>
      ))}
    </tr>
  );
}

export default Columns;
