const SET_GENDER = "UndateOptions/gender";
const SET_AGE = "UpdateOptions/age";
const SET_RACE = "UpdateOptions/race";
const SET_DEATH = "UpdateOptions/death";

export const setGender = (gender) => ({
  type: SET_GENDER,
  payload: gender,
});

export const setAge = (age) => ({
  type: SET_AGE,
  payload: age,
});

export const setRace = (race) => ({
  type: SET_RACE,
  payload: race,
});

export const setDeath = (death) => ({
  type: SET_DEATH,
  payload: death,
});

export default function setSortOptionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_GENDER:
      return action.payload;
    case SET_AGE:
      return action.payload;
    case SET_RACE:
      return action.payload;
    case SET_DEATH:
      return action.payload;
    default:
      return state;
  }
}

const INITIAL_STATE = "person_id";
