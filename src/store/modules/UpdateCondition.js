const CONDITION = "UpdateCondition";

export const setCondition = (data) => ({ type: CONDITION, payload: data });

export default function setConditionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONDITION:
      return action.payload;
    default:
      return state;
  }
}

const INITIAL_STATE = [];
