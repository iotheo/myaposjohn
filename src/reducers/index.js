import { createReducer } from '@reduxjs/toolkit';

import { issueCloseSucceded, issueCreateSucceeded, issuesFetchFailed, issuesFetchSucceeded, renderIssuesSpinner } from '../actions';

export const issuesReducer = createReducer({
  isLoading: true,
  shouldRenderSpinner: false,
},
  (builder) => {
    builder.addCase(issuesFetchSucceeded, (state, action) => {
      state.isLoading = false;
      state.shouldRenderSpinner = false;
      state.results = action.payload?.results;
    })

    builder.addCase(issuesFetchFailed, (state, action) => {
      state.isLoading = false;
    })

    builder.addCase(renderIssuesSpinner, state => {
      state.shouldRenderSpinner = true;
    })

    builder.addCase(issueCreateSucceeded, (state, action) => {
      const { payload } = action;

      state.results.unshift(payload);
    })

    builder.addCase(issueCloseSucceded, (state, action) => {
      const { payload } = action;
      const issueNumber = payload.number;

      state.results = state.results.filter(issue => issue.number !== issueNumber);
    })


    builder.addDefaultCase(() => {})
  }
)
