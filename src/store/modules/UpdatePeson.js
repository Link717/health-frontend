const PERSON = "UpdatePerson";

export const setPerson = (data) => ({ type: PERSON, payload: data });

export default function setPersonReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PERSON:
      return action.payload;
    default:
      return state;
  }
}

const INITIAL_STATE = [];
