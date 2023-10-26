import { applyMiddleware, compose, createStore } from "redux";
import rootReducers from "./index";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  )); 


export default store ;