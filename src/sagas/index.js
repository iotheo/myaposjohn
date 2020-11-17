import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { issuesFetchRequested } from '../actions';



//  fetch('https://api.github.com/repos/myapos/testing_repo/issues', fetchOptions)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     })


function* fetchIssues () {
  debugger;
  try {
    const issues = yield call(() => console.log('Hello I\'m a saga'));

    yield put({
      type: 'ISSUES_FETCH_SUCCEEDED',
      issues,
    })
  } catch (error) {
    yield put({
      type: "USER_FETCH_FAILED",
      message: error.message
    });
  }


}



function* mainSaga() {
  yield takeLatest(issuesFetchRequested, fetchIssues);
}

export default mainSaga;