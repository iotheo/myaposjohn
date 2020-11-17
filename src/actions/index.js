import { createAction } from '@reduxjs/toolkit';

const CREATE_ISSUE = 'CREATE_ISSUE';
const ISSUES_FETCH_REQUESTED = 'ISSUES_FETCH_REQUESTED';

export const createIssue = createAction(CREATE_ISSUE);
export const issuesFetchRequested = createAction(ISSUES_FETCH_REQUESTED);