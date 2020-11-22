import { createReducer } from '@reduxjs/toolkit';

import { issueCloseSucceeded, issueCreateSucceeded, issuesFetchFailed, issuesFetchSucceeded, renderIssuesSpinner } from '../actions';

const issuesReducer = createReducer({
  isLoading: true,
  shouldRenderSpinner: false,
},
  (builder) => {
    builder.addCase(issuesFetchSucceeded, (state, action) => {
      state.isLoading = false;
      state.shouldRenderSpinner = false;
      state.results = action.payload?.results;
    })
    .addCase(issuesFetchFailed, (state, action) => {
      state.isLoading = false;
    })
    .addCase(renderIssuesSpinner, state => {
      state.shouldRenderSpinner = true;
    })
    .addCase(issueCreateSucceeded, (state, action) => {
      const { payload } = action;

      state.results.unshift(payload);
    })
    .addCase(issueCloseSucceeded, (state, action) => {
      const { payload } = action;
      const issueNumber = payload.number;

      state.results = state.results.filter(issue => issue.number !== issueNumber);
    })
    .addDefaultCase(() => {})
  }
)

export default issuesReducer;