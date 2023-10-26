import handleCarte from "./handleCarte" ;
import { combineReducers } from "redux" ;
import Reducer from "./reduceruser"
import ErrorReducer from "./reducererror"
const rootReducers = combineReducers({
   handleCarte,Reducer,ErrorReducer
});
export default rootReducers;