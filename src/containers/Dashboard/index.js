import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BootstrapTable from 'react-bootstrap-table-next';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'react-bootstrap/Spinner';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import { renderIssuesSpinner } from '../../actions';

import './Dashboard.css';

const columns = [{
  dataField: 'title',
  text: 'Title'
  },
  {
    dataField: 'body',
    text: 'Body',
    filter: textFilter(),
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
        <Dropdown.Item >Close issue</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  },
];


const Dashboard = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.issues.isLoading);
  const shouldRenderSpinner = useSelector(state => state.issues.shouldRenderSpinner);
  const results = useSelector(state => state.issues.results)

  const [showModal, setShowModal] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(renderIssuesSpinner())
    }, 800);

    return () => clearTimeout(timer);
  }, [dispatch]);

  function handleCloseModal () {
    setShowModal(false);
  }


  if (!isLoading && results?.length) {
    return (
      <>
        <BootstrapTable
        filter={filterFactory({
          delay: 200,
        })}
        striped
        hover
        keyField="id"
        data={results}
        columns={columns} />

      </>
    )
  }

  if (isLoading && shouldRenderSpinner) {
    return (
      <div className="loading-spinner">
      <div className="mb-4 loading-spinner__message">Loading issues..</div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      </div>
    )
  }

  return null;
};

export default Dashboard;
