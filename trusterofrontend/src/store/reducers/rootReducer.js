import { combineReducers } from "redux";
import lists from './listReducer';
import tasks from './taskReducer';
import comments from './commentReducer';
const rootReducer = combineReducers({
  lists,
  tasks,
  comments
});

export default rootReducer;
