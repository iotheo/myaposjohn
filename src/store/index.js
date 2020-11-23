import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

import { alertReducer, issuesReducer, loginReducer } from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]

const store = configureStore({
  reducer: combineReducers({
    issues: issuesReducer,
    alert: alertReducer,
    login: loginReducer,
  }),
  devTools: {
    name: "Myapos John"
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    ...middlewares,
  ]
});

sagaMiddleware.run(sagas);

export default store;