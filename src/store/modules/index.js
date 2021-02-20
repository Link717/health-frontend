import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import setConditionReducer from "./UpdateCondition";
import setDeathReducer from "./UpdateDeath";
import setPersonReducer from "./UpdatePeson";
import setVisitReducer from "./UpdateVisit";
import setSortOptionReducer from "./UpdateOptions";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  setConditionReducer,
  setDeathReducer,
  setPersonReducer,
  setVisitReducer,
  setSortOptionReducer,
});

export default persistReducer(persistConfig, rootReducer);
