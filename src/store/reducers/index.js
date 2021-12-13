import { combineReducers } from "redux";
import binatang from "./binatang_reducer";
import notifications from './noitifications_reducer';

const appReducers = combineReducers({
    binatang,
    notifications
})

export default appReducers;