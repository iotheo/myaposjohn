import { hasLogged, hasSubmitted } from "../actions";

const { createReducer } = require("@reduxjs/toolkit");

const loginReducer = createReducer({
  hasSubmitted: false,
},
  (builder) => {
    builder.addCase(hasLogged, state => {
      state.hasSubmitted = false;
    })
    .addCase(hasSubmitted, state => {
     state.hasSubmitted = true;
    })
    .addDefaultCase(() => {})
})

export default loginReducer;