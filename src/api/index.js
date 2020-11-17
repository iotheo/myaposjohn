const fetchOptions = {
  method: 'GET',
  headers: {
    'authorization': 'token 8a565ede440c3b96d873d863d694f3fc26536481',
    'Content-Type': 'application/json',
    // 'cache-control': 'no-cache',
    // 'Access-Control-Allow-Headers': '*',
  }
}


export async function fetchIssues () {
  return await fetch('https://api.github.com/repos/myapos/testing_repoa/issues', fetchOptions)
    .then(res => res.json())
    .catch(err => err)
}
