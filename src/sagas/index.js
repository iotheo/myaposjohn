import { call, put, takeEvery, all } from 'redux-saga/effects';
import { fetchIssues, createIssue, closeIssue } from '../api';
import {
  issueCloseFailed,
  issueCloseRequested,
  issueCloseSucceeded,
  issueCreateFailed,
  issueCreateRequested,
  issueCreateSucceeded,
  issuesFetchFailed,
  issuesFetchSucceeded
} from '../actions';

function* fetchIssuesSaga () {
  try {
    const response = yield call(fetchIssues);
    if(response.error) {
      return yield put(issuesFetchFailed(response.error));
    }

    yield put(issuesFetchSucceeded({
      results: response,
    }))
  } catch (error) {
    yield put(issuesFetchFailed(error));
  }
}

function* createIssueSaga (action) {
  const { payload } = action;

  try {
    const response = yield call(createIssue, payload);
    if (response.error) {
      return yield put(issueCreateFailed(response.error));
    }

    yield put(issueCreateSucceeded(response));

  } catch (err) {

    debugger;
    yield put(issueCreateFailed, err);
  }
}

function* closeIssueSaga (action) {
  const { payload } = action;

  try {
    const response = yield call(closeIssue, payload);

    if (response.error) {
      return yield put(issueCloseFailed(response.error));
    }

    yield put(issueCloseSucceeded(response));

  } catch (error) {
    yield put ({
      issueCloseFailed,
      error,
    });
  }
}

function* mainSaga() {
  yield all([
    call(fetchIssuesSaga),
  ])

  yield takeEvery(issueCreateRequested, createIssueSaga);
  yield takeEvery(issueCloseRequested, closeIssueSaga);
}

export default mainSaga;