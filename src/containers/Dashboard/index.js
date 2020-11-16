import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';


import { Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

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
    formatter: cell => <Dropdown>
      <Dropdown.Toggle variant="secondary" id="cog">
        <FontAwesomeIcon icon={faCog} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Modify</Dropdown.Item>
        <Dropdown.Item >Test</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item >Close issue</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
