import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemon";
import { uiReducer } from "./ui";

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

export default rootReducer;
