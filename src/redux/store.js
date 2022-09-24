import { combineReducers ,createStore,applyMiddleware , } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { LoginUserReducers } from "./reducers/loginReducers";
// import { LoginHunterReducers, RegisterHunterReducers } from "./reducers/hunterReducers.js";




 

const RootReducer = combineReducers({
   
    currentUser:LoginUserReducers, 
}) 
let initialState = {}
const middleware = [thunk]

export const store = createStore(
    RootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware))

);

