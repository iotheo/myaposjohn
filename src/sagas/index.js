import { call, put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';
import { fetchIssues } from '../api';

function* fetchIssuesSaga () {
  try {
    const response = yield call(fetchIssues);

    // yield delay(5000);

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
      results: response,
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