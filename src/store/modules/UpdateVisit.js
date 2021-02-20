const VISIT = "UpdateVisit";

export const setVisit = (data) => ({ type: VISIT, payload: data });

export default function setVisitReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case VISIT:
      return action.payload;
    default:
      return state;
  }
}

const INITIAL_STATE = [];
