import { combineReducers } from "redux";
import aumentaReducer from './ReduceAumenta'
import decrementaReducer from './ReduceDecrementa'
import objReducer from './OggettiReduce'
import cronoReduce from "./CronometroReducer";

const rootReducer = combineReducers({
    aumentaReducer,
    decrementaReducer,
    objReducer,
    cronoReduce
})

export default rootReducer