import { closeAlert, issueCloseFailed, issueCloseSucceeded, issueCreateFailed, issueCreateSucceeded } from "../actions";

const { createReducer } = require("@reduxjs/toolkit");

const alertVariant = {
  SUCCESS: 'success',
  DANGER: 'danger',
}

const alertReducer = createReducer({
  message: '',
  variant: '',
  shouldShowAlert: false,
},
  (builder) => {
    builder.addCase(issueCreateSucceeded, state => {
      state.message = 'Your issue has been created successfully 🎉'
      state.variant = alertVariant.SUCCESS;
      state.shouldShowAlert = true;
    })
    .addCase(issueCreateFailed, state => {
      state.message = 'Something went wrong. Please try again 😁';
      state.variant = alertVariant.DANGER;
      state.shouldShowAlert = true;
    })
    .addCase(issueCloseSucceeded, state => {
      state.message = 'Your issue has been closed successfully 🎉';
      state.variant = alertVariant.SUCCESS;
      state.shouldShowAlert = true;

    })
    .addCase(issueCloseFailed, state => {
      state.message = 'Something went wrong. Please try again 😁';
      state.variant = alertVariant.DANGER;
      state.shouldShowAlert = true;
    })
    .addCase(closeAlert, state => {
      state.shouldShowAlert = false;
    })
    .addDefaultCase(() => {});
  }
)

export default alertReducer;
