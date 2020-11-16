import { configureStore, createReducer } from "@reduxjs/toolkit";

const reducer = createReducer([],
  (builder) => {


    builder.addDefaultCase(() => {})
  }
)

const store = configureStore({
  reducer: reducer,
  devTools: {
    name: "Myapos John"
  }
});


export default store;