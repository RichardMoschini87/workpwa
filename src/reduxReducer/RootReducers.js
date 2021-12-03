import { combineReducers } from "redux";
import aumentaReducer from './ReduceAumenta'
import decrementaReducer from './ReduceDecrementa'

const rootReducer = combineReducers({
    aumentaReducer,
    decrementaReducer
})

export default rootReducer