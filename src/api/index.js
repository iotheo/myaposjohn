const URL = 'https://api.github.com/repos/myapos/testing_repo/issues';
const headers = {
  'authorization': 'token 8a565ede440c3b96d873d863d694f3fc26536481',
    'Content-Type': 'application/json',
}

const fetchOptions = {
  method: 'GET',
  headers,
}

const createIssueOptions = {
  method: 'POST',
  headers,
}

const closeIssueOptions = {
  method: 'PATCH',
  headers,
}

export async function fetchIssues () {
  return await fetch(URL, fetchOptions)
    .then(res => res.json())
    .catch(err => err)
}

export async function createIssue (payload) {
  return await fetch(URL, {
    ...createIssueOptions,
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .catch(err => err)
}

export async function closeIssue ({ number }) {
  const ENDPOINT = `${URL}/${number}`;

  return await fetch(ENDPOINT, {
    ...closeIssueOptions,
    body: JSON.stringify({
      number,
      state: 'closed',
    })
  })
    .then(res => res.json())
    .catch(err => err)
}