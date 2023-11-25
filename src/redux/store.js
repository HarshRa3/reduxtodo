import { createStore, compose } from "redux";
import rootReducer from "./reducer";

// Enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store with middleware and enhancers
const store = createStore(
  rootReducer,
  composeEnhancers()
);

export default store;