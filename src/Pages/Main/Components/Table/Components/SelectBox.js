import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  setGender,
  setAge,
  setRace,
  setDeath,
} from "../../../../../store/modules/UpdateOptions";

export const OPTIONS = [
  {
    id: 0,
    category: "gender_source_value",
    subCategories: [
      { name: "성별", type: "전체" },
      { name: "F", type: "여성" },
      { name: "M", type: "남성" },
    ],
  },
  {
    id: 1,
    category: "persion_age",
    subCategories: [
      { name: "나이", type: "전체" },
      { name: "20세 미만", type: "<10" },
      { name: "30대", type: "30" },
      { name: "40대", type: "40" },
      { name: "50대", type: "50" },
      { name: "60대", type: "60" },
      { name: "70대", type: "70" },
      { name: "80세 초과", type: "100<" },
    ],
  },
  {
    id: 2,
    category: "race_source_value",
    subCategories: [
      { name: "인종", type: "전체" },
      { name: "white", type: "백인" },
      { name: "black", type: "흑인" },
      { name: "asian", type: "아시안" },
      { name: "native", type: "네이티브" },
      { name: "other", type: "기타" },
    ],
  },
  {
    id: 3,
    category: "death_date",
    subCategories: [
      { name: "사망 여부", type: "전체" },
      { name: "0", type: "생존" },
      { name: "1", type: "사망" },
    ],
  },
];

function SelectBox() {
  const dispatch = useDispatch();
  const handleOptions = (e) => {
    const category = e.target.name;
    const name = e.target.value;
    console.log(category, name);

    switch (category) {
      case "gender_source_value":
        return dispatch(setGender(category));
      case "persion_age":
        return dispatch(setAge(category));
      case "race_source_value":
        return dispatch(setRace(category));
      case "death_date":
        return dispatch(setDeath(category));
      default:
    }
  };
  return (
    <SelectBoxContainer>
      {OPTIONS.map((option) => (
        <select key={option.id} name={option.category} onChange={handleOptions}>
          {option.subCategories.map((subCategory, idx) => (
            <option key={idx} value={subCategory.name}>
              {subCategory.name}
            </option>
          ))}
        </select>
      ))}
    </SelectBoxContainer>
  );
}

export default SelectBox;

const SelectBoxContainer = styled.div`
  ${({ theme }) => theme.flex("flex-end", null, null)};
  ${({ theme }) => theme.container};
  margin: 0 auto;
  padding-bottom: 15px;

  select {
    ${({ theme }) => theme.selectStyle}
  }
`;
