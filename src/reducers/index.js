import { createReducer } from '@reduxjs/toolkit';

import { issuesFetchFailed, issuesFetchSucceeded, renderIssuesSpinner } from '../actions';

export const issuesReducer = createReducer({
  isLoading: true,
  shouldRenderSpinner: false,
},
  (builder) => {
    builder.addCase(issuesFetchSucceeded, (state, action) => {
      state.isLoading = false;
      state.shouldRenderSpinner = false;
      state.results = action.results;
    })

    builder.addCase(issuesFetchFailed, (state, action) => {
      state.isLoading = false;
    })

    builder.addCase(renderIssuesSpinner, state => {
      state.shouldRenderSpinner = true;
    })

    builder.addDefaultCase(() => {})
  }
)
