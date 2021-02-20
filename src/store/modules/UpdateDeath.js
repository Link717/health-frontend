const DEATH = "UpdateDeath";

export const setDeath = (data) => ({ type: DEATH, payload: data });

export default function setDeathReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DEATH:
      return action.payload;
    default:
      return state;
  }
}

const INITIAL_STATE = [];
