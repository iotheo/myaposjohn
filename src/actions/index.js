import { createAction } from '@reduxjs/toolkit';

const CREATE_ISSUE = 'CREATE_ISSUE';
const createIssue = createAction(CREATE_ISSUE);

export default createIssue;