/* eslint-disable no-underscore-dangle */
//import "babel-polyfill";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./reducer.root";
import rootSagas from "./sagas.root";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware, routerMiddleware(history)];

export const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware(...middlewares))
);

store.runSaga = sagaMiddleware.run;
store.runSaga(rootSagas);
