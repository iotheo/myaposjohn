import { call, put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';
import { fetchIssues, createIssue, closeIssue } from '../api';
import { issueCloseFailed, issueCloseRequested, issueCloseSucceded, issueCreateRequested, issuesFetchFailed, issuesFetchSucceeded } from '../actions';

function* fetchIssuesSaga () {
  try {
    const response = yield call(fetchIssues);

    // yield delay(5000);

    // This is considered an error message
    if(response.message) {

      // Early bail out on error
      return yield put(issuesFetchFailed(() => {
        return {
          error: {
            message: response.message
          }
        }
      }));
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
  } catch (e) {

  }
}

function* closeIssueSaga (action) {
  const { payload } = action;

  try {
    const response = yield call(closeIssue, payload);

    yield put(issueCloseSucceded(response));

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