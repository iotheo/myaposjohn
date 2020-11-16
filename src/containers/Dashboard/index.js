import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const fetchOptions = {
  method: 'GET',
  headers: {
    'authorization': 'token 8a565ede440c3b96d873d863d694f3fc26536481',
    'Content-Type': 'application/json',
    // 'cache-control': 'no-cache',
    // 'Access-Control-Allow-Headers': '*',
  }
}

const columns = [{
  dataField: 'title',
  text: 'Title'
  },
  {
    dataField: 'body',
    text: 'Body'
  },
  {
    dataField: 'state',
    text: 'State'
  },
  {
    dataField: 'labels',
    text: 'Labels',
    formatter: cell => {
    return <>{cell.map((label, idx) => <div key={idx}>{label && label.name}</div>)}</>
  },
  },
  {
    dataField: 'assignee',
    text: 'Assignee',
  },
  {
    dataField: 'id',
    text: 'Actions',
    formatter: cell => <div>{cell}</div>
  },
];


const Dashboard = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState();


  useEffect(() => {

    fetch('https://api.github.com/repos/myapos/testing_repo/issues', fetchOptions)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setResults(data)
    })
  }, [])

  if (results.length) {
    // return (
    //   results.map((item, idx) => <div key={item.id}>{item.title}</div>)
    // );

  }

  return <BootstrapTable
    striped
    hover
    keyField="id"
    data={results}
    columns={columns} />

  return <div>no results</div>
};

export default Dashboard;
