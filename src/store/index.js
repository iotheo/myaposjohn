import { configureStore, createReducer, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const reducer = createReducer([],
  (builder) => {


    builder.addDefaultCase(() => {})
  }
)

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]

const store = configureStore({
  reducer: reducer,
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