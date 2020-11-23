const URL = 'https://api.github.com/repos/myapos/testing_repo/issues';
const headers = {
  'authorization': `token ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
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

async function myFetch (URL, options) {
  return await fetch(URL, options)
  .then(res => {
    if (res.status >=400 && res.status < 500) {
      return {
        error: {
          status: res.status,
          statusText: res.statusText
        }
      }
    }

    return res.json();
  })
  .catch(err => err)
}

export async function fetchIssues () {
  return myFetch(URL, fetchOptions);
}

export async function createIssue (payload) {
  return myFetch(URL, {
    ...createIssueOptions,
    body: JSON.stringify(payload)
  })
}

export async function closeIssue ({ number }) {
  const ENDPOINT = `${URL}/${number}`;

  return await myFetch(ENDPOINT, {
    ...closeIssueOptions,
    body: JSON.stringify({
      number,
      state: 'closed',
    })
  });
}