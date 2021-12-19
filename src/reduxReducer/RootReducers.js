import { combineReducers } from "redux";
import aumentaReducer from './ReduceAumenta'
import decrementaReducer from './ReduceDecrementa'
import objReducer from './OggettiReduce'
import cronoReduce from "./CronometroReducer";
import timeReducer from './ReduceTime'
import ripReducer from './ReduceTime'
import intervalReduce from './IntervalReducer'
import saveReducer from './SaveReducer'

const rootReducer = combineReducers({
    aumentaReducer,
    decrementaReducer,
    objReducer,
    cronoReduce,
    timeReducer,
    ripReducer,
    intervalReduce,
    saveReducer
})

export default rootReducer