import { createAction } from '@reduxjs/toolkit';

const CREATE_ISSUE = 'CREATE_ISSUE';
const ISSUES_FETCH_REQUESTED = 'ISSUES_FETCH_REQUESTED';
const ISSUES_FETCH_SUCCEEDED = 'ISSUES_FETCH_SUCCEEDED';
const ISSUES_FETCH_FAILED = 'ISSUES_FETCH_FAILED';
const RENDER_ISSUES_SPINNER = 'RENDER_ISSUES_SPINNER';
const ISSUE_CREATE_REQUESTED = 'ISSUE_CREATE_REQUESTED';
const ISSUE_CLOSE_REQUESTED = 'ISSUE_CLOSE_REQUESTED';
const ISSUE_CLOSE_SUCCEEDED = 'ISSUE_CLOSE_SUCCEEDED';
const ISSUE_CLOSE_FAILED = 'ISSUE_CLOSE_FAILED';

export const createIssue = createAction(CREATE_ISSUE);
export const issuesFetchRequested = createAction(ISSUES_FETCH_REQUESTED);
export const issuesFetchSucceeded = createAction(ISSUES_FETCH_SUCCEEDED);
export const issuesFetchFailed = createAction(ISSUES_FETCH_FAILED);
export const renderIssuesSpinner = createAction(RENDER_ISSUES_SPINNER);
export const issueCreateRequested = createAction(ISSUE_CREATE_REQUESTED);
export const issueCloseRequested = createAction(ISSUE_CLOSE_REQUESTED);
export const issueCloseSucceded = createAction(ISSUE_CLOSE_SUCCEEDED);
export const issueCloseFailed = createAction(ISSUE_CLOSE_FAILED);
