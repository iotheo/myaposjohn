import { call, put, takeEvery, take, takeLatest, all } from 'redux-saga/effects';
import { fetchIssues } from '../api';

function* fetchIssuesSaga () {
  try {
    const response = yield call(fetchIssues);

    // This is considered an error message
    if(response.message) {
      return yield put({
        type: 'ISSUES_FETCH_FAILED',
        error: {
          message: response.message
        }
      });
    }

    yield put({
      type: 'ISSUES_FETCH_SUCCEEDED',
      issues: response,
    })
  } catch (error) {
    yield put({
      type: 'ISSUES_FETCH_FAILED',
      error,
    });
  }
}

function* mainSaga() {
  yield all([
    call(fetchIssuesSaga)
  ])
}

export default mainSaga;