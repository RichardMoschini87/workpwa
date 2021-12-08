import { combineReducers } from "redux";
import aumentaReducer from './ReduceAumenta'
import decrementaReducer from './ReduceDecrementa'
import objReducer from './OggettiReduce'

const rootReducer = combineReducers({
    aumentaReducer,
    decrementaReducer,
    objReducer
})

export default rootReducer