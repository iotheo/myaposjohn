const URL = 'https://api.github.com/repos/myapos/testing_repo/issues';

const fetchOptions = {
  method: 'GET',
  headers: {
    'authorization': 'token 8a565ede440c3b96d873d863d694f3fc26536481',
    'Content-Type': 'application/json',
    // 'cache-control': 'no-cache',
    // 'Access-Control-Allow-Headers': '*',
  }
}


const createIssueOptions = {
  method: 'POST',
  headers: {
    'authorization': 'token 8a565ede440c3b96d873d863d694f3fc26536481',
    'Content-Type': 'application/json',
  }

}

export async function fetchIssues () {
  return await fetch(URL, fetchOptions)
    .then(res => res.json())
    .catch(err => err)
}

export async function createIssue (payload) {
  debugger;

  return await fetch(URL, {
    ...createIssueOptions,
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .catch(err => err)
}
