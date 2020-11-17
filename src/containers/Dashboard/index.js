import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import BootstrapTable from 'react-bootstrap-table-next';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

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
  const dispatch = useDispatch();

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
